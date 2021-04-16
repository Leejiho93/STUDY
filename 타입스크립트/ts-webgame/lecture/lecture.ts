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

//데코레이터

function makeGender(target: typeof Person) {
    console.log('hello');
    return class extends target {
        gender = 'male';
    }
}

@makeGender
class Person {
    title: string;
    age = 27;
    constructor(name: string) {
        this.title = name;
    }

    setTitle(title: string) {

    }

    sayTitle(): any {
        return this.title;
    }
}

@makeGender
class Person2 {
    title: string;
    age = 27;
    constructor(name: string) {
        this.title = name;
    }

    setTitle(title: string) {

    }

    sayTitle(): any {
        return this.title;
    }
}