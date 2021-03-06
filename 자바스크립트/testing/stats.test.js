const stats = require('./stats');

describe('stats', () => {
    it('gets maximum value', () => {
        expect(stats.max([1, 2, 3, 4])).toBe(4);
    });

    it('gets minimum value', () => {
        expect(stats.min([1, 2, 3, 4])).toBe(1);
    });

    it('gets average value', () => {
        expect(stats.avg([1, 2, 3, 4, 5])).toBe(3);
    });

    describe('median', () => {
        it('sorts the array', () => {
            expect(stats.sort([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
        });

        it('gets the median for odd length', () => {
            expect(stats.median([1, 2, 3, 4, 5])).toBe(3);
        });

        it('gets the median for even length', () => {
            expect(stats.median([1, 2, 3, 4, 5, 6])).toBe(3.5);
        });
    });

    describe('mode', () => {
        it('has one mode', () => {
            expect(stats.mode([1, 2, 2, 2, 3])).toBe(2);
        });
        it('has no mode', () => {
            expect(stats.mode([1, 2, 3])).toBe(null);
        });
        it('has multiple mode', () => {
            expect(stats.mode([1, 2, 2, 3, 3, 4])).toEqual([2, 3]);
        });
    });
});

// describe 내부에 또 describe 를 쓸 수 있다
// it 내부에는 또다른 it 이나 describe를 쓸 수 없다
// 객체나 배열을 비교 할 때는 toEqual 을 사용
