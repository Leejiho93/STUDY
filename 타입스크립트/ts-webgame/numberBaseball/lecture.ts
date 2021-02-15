let num: number =  3;

let str: string;

let arr: (string | number)[] = [1, 2 ,3];

let arr2: [number, number, string] = [1, 2, 'str'];

let arr3 = [true, '2', 3] as const;

const a = 1;


enum Color { Red, Green, Blue};
let c: Color = Color.Green

function add(a: number, b: number): number {
    return a + b;
}

function f(a: number, b: number): (c: string) => number {
    return (s: string) => {
        console.log(s);
        return a + b;
    }
}

const obj: { a?: (b: number) => String } = {
    a(b: number) {
        return 'hi';
    }
}
 
