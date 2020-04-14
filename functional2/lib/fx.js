const map = (f, iter) => {
    let res = [];

    for (const a of iter) {
        res.push(f(a));
    }
    return res;
}

const filter = (f, iter) => {
    let res = [];

    for (const a of iter) {
        if (f(a)) res.push(a)
    }
    return res;
}

const reduce = (f, acc, iter) => {
    if (!iter) {
        iter = acc[Symbol.iterator](); // 여기서 iter는?
        acc = iter.next().value;
    }

    for (const n of iter) {
        acc = f(acc, n);
    }
    return acc;
}