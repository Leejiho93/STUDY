import canUseDOM from 'can-use-dom';

console.log(canUseDOM);

window.hello = 'a';

// intersection & call, apply

interface A {
    hello: true,
}

interface B {
    bye: true,
}

type C = {
    hi: false,
}

const a: A = {
    hello: true,
}

const b: B = {
    bye: true,
}

const c: A & B & C = {
    hello: true,
    bye: true,
    hi: false,
}

const d: A | B | C = {
    hello: true,
}

const result = Array.prototype.map.call<number[], [(item: number) => string], string[]>([1, 2, 3], (item) => {
    return item.toFixed(1);
})


// TS 유틸리티

interface Z {
    a: 'b', 
    c: true,
    d: 123,
}

const z: Z = {
    a: 'b',
    c: true,
    d: 123
}

const x: Partial<Z> = {
    c: true,
}