const go = (...args) => (reduce((a, f) => f(a), args));
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const curry = f =>
    (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const take = curry((l, iter) => {
    let res = [];
    for (const a of iter) {
        res.push(a);
        if (res.length == l) return res;
    }
    return res;
});

const reduce = curry((f, acc, iter) => {
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }

    for (const n of iter) {
        acc = f(acc, n);
    }
    return acc;
});

const L = {};

L.range = function* (l) {
    let i = -1;
    while (++i < l) {
        yield i;
    }
};

L.map = curry(function* (f, iter) {
    for (const a of iter) yield f(a);
})

L.filter = curry(function* (f, iter) {
    for (const a of iter) if (f(a)) yield a;
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

const isIterable = a => a && a[Symbol.iterator];

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