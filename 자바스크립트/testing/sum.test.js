const { idText } = require('typescript');
const { sum, sumOf } = require('./sum');

// test('1 + 2 = 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

// test 새로운 테스트 케이스 만드는 함수
// expect 통과하면 테스트 성공, 통과하지 못하면 실패
// toBe 특정 값이 어떤 조건을 만족하는지, 또는 어떤 함수가 실행 됐는지, 에러 났는지 확인

describe('sum', () => {
    it('calculates 1 + 2', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('calculates all numbers', () => {
        const array = [1, 2, 3, 4, 5];
        expect(sumOf(array)).toBe(15);
    });
});

// describe 여러 테스트 케이스를 묶음
// it test랑 같음
