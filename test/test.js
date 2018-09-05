const assert = require('assert');

describe('Array', function() {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('Test suit', function () {
    let tests = [
        {args: [1, 2],       expected: 3},
        {args: [1, 2, 3],    expected: 6},
        {args: [1, 2, 3, 4], expected: 10}
    ];
    tests.forEach(function(test) {
        it('correctly adds ' + test.args.length + ' args', function() {
            let res = test.args.reduce(function(prev, curr) {
                return prev + curr;
            })
            assert.equal(res, test.expected);
        });
    });
});
