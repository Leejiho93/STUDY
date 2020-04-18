const log = console.log;
const add = (a, b) => a + b;

const curry = f =>
    (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const isIterable = a => a && a[Symbol.iterator];

const go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a);

const take = curry((l, iter) => {
    let res = [];

    iter = iter[Symbol.iterator]();

    return function recur() {
        let cur;
        while (!(cur = iter.next()).done) {
            const a = cur.value;
            if (a instanceof Promise) {
                return a
                    .then(a => (res.push(a), res).length == l ? res : recur())
                    .catch(e => e == nop ? recur() : Promise.reject(e));
            }
            res.push(a);
            if (res.length == l) return res;
        }
        return res;
    }();
    // for (const a of iter) {
    //     res.push(a);
    //     if (res.length == l) return res;
    // }
    // return res;
});

const reduceF = (acc, a, f) =>
    a instanceof Promise ?
        a.then(a => f(acc, a), e => e == nop ? acc : Promise.reject(e)) :
        f(acc, a)

const head = iter => go1(take(1, iter), ([h]) => h);

const reduce = curry((f, acc, iter) => {
    if (!iter) return reduce(f, head(iter = acc[Symbol.iterator]()), iter);

    iter = iter[Symbol.iterator]();
    return go1(acc, function recur(acc) {
        let cur;
        while (!(cur = iter.next()).done) {
            // const a = cur.value;
            // acc = f(acc, a);
            acc = reduceF(acc, cur.value, f)
            if (acc instanceof Promise) return acc.then(recur)
        }
        return acc;
    });
    // for (const n of iter) {
    //     acc = f(acc, n);
    // }
    // return acc;
});

const go = (...args) => (reduce((a, f) => f(a), args));
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const L = {};

L.range = function* (l) {
    let i = -1;
    while (++i < l) {
        yield i;
    }
};

L.map = curry(function* (f, iter) {
    for (const a of iter) yield go1(a, f);
})

const nop = Symbol('nop')

L.filter = curry(function* (f, iter) {
    for (const a of iter) {
        const b = go1(a, f);
        if (b instanceof Promise) yield b.then(b => b ? a : Promise.reject(nop))
        else if (b) yield a;
    }
});
// const map = curry((f, iter) => {
//     let res = [];

//     // for of문 실제 동작과정
//     // iter = iter[Symbol.iterator]();
//     // let cur;
//     // while(!(cur = iter.next()).done) {
//     //     const a = cur.value;
//     //     res.push(f(a))
//     // }
//     for (const a of iter) {
//         res.push(f(a));
//     }
//     return res;
// });

const sum = (a, b) => a + b;

const takeAll = take(Infinity);
const map = curry(pipe(L.map, takeAll));
const filter = curry(pipe(L.filter, takeAll));

// const filter = curry((f, iter) => {
//     let res = [];

//     for (const a of iter) {
//         if (f(a)) res.push(a)
//     }
//     return res;
// });

const range = l => {
    let res = [];
    let i = -1;
    while (++i < l) {
        res.push(i);
    }
    return res;
};

L.flatten = function* (iter) {
    for (const a of iter) {
        // if (isIterable(a)) for (const b of a) yield b;
        if (isIterable(a)) yield* a;
        else yield a;
    }
}

L.deepFlat = function* f(iter) {
    for (const a of iter) {
        if (isIterable(a)) yield* f(a);
        else yield a;
    }
}

const flatten = pipe(L.flatten, takeAll);

L.faltMap = curry(pipe(L.map, L.flatten));
const flatMap = curry(pipe(L.map, flatten));

const find = curry((f, iter) => go(
    iter,
    L.filter(f),
    take(1),
    ([a]) => a,
));

const C = {};
function noop() { };
const catchNoop = ([...arr]) =>
    (arr.forEach(a => a instanceof Promise ? a.catch(noop) : a), arr);

C.reduce = curry((f, acc, iter) => iter ?
    reduce(f, acc, catchNoop(iter)) :
    reduce(f, catchNoop(acc))
);

C.take = curry((l, iter) => take(l, catchNoop(iter)));
C.takeAll = C.take(Infinity);

C.map = curry(pipe(L.map, C.takeAll));
C.filter = curry(pipe(L.filter, C.takeAll));