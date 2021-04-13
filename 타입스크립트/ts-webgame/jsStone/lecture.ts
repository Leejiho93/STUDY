// 제네릭 에서 extends는 타입 제한

// interface obj<T extends string> {
//     add: (a: T, b: T) => T 
// }

interface obj<T> {
    add: (a: T, b: T) => T 
}

const a: obj<number> = {
    add: (a, b) => a + b
}

const b: obj<string> = {
    add: (a, b) => a + b
};

function forEach<T>(arr: T[], callback: (item: T) => void): void {
    for (let i :number = 0; i < arr.length; i++) {
        callback(arr[i])
    }
};

let d: number[] = [1, 2, 3];
forEach<number>(d, (item) => {
    item = item + 1; 
});

console.log('d: ', d);

['a', 'b', 'c', 1].forEach((item) => {
    console.log(item)
})