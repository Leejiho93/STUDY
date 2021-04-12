let num: number =  3;


let str: string = num.toString();

let arr: (string | number)[] = [1, 2 ,3, 'a'];
let arr2: Array<number | string> = [1, 2, 3];

let arr3: [number, number, string] = [1, 2, 'str'];

let arr4 = [true, '2', 3] as const; // readonly

const ob: { a: string, b?: number } = { a: 'b'};

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

const obj: { a?: (b?: number) => String } = {
    a(b?: number) {
        return 'hi';
    }
}

const hi: any = false // 자바스크립트 = any

const hello: number = 3;
(hello as unknown as string).substr(1, 3);
(<string><unknown>hello).substr(1, 3);
 
const div = document.createElement('div');
const abc = div as HTMLElement    // 부모 자식 관계라 unknown 필요없음