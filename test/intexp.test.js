'use strict';
const assert = require('assert');

describe('Intexp', function () {
    const intexp = require('..');

    describe(' given valid input: ', function () {

        it('passes sanity check', function () {
            const value = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
            assert.strictEqual(intexp.ldexp(...intexp.intexp(value)), value);
        });

        it('properly decomposes 0', function () {
            assert.deepStrictEqual(intexp.intexp(0), [0, 0]);
        });

        it('properly decomposes numbers with high power of 2 component', function () {
            const exponent = Math.ceil(Math.random() * 10) + 31;
            const value = 3 * Math.pow(2, exponent);

            assert.deepStrictEqual(intexp.intexp(value), [3, exponent]);
        });

        it('properly decomposes numbers with low power of 2 component', function () {
            const exponent = Math.ceil(Math.random() * 10) + 30;
            const value = 5 * Math.pow(2, exponent);

            assert.deepStrictEqual(intexp.intexp(value), [5, exponent]);
        });

        it('properly decomposes powers of two', function () {
            const exponent = Math.ceil(Math.random() * 10) + 30;
            assert.deepStrictEqual(intexp.intexp(Math.pow(2, exponent)), [1, exponent]);
        });

        it('properly decomposes odd integers', function () {
            const exponent = Math.ceil(Math.random() * 31);
            const value = Math.pow(2, exponent) - 1;

            assert.deepStrictEqual(intexp.intexp(value), [value, 0]);
        });
    });

    describe(' given invalid input: ', function () {
        const expectFailureForValue = v => {
            try {
                intexp.intexp(v);
                assert.fail('should fail');
            } catch (e) {
                assert.strictEqual(e.message, 'Unsupported Value for Decomposition');
            }
        };

        it('fails on non-safe integer input', function () {
            expectFailureForValue(Number.MAX_SAFE_INTEGER + 1);
        });

        it('fails on float input', function () {
            expectFailureForValue(1.1);
        });

        it('fails on null input', function () {
            expectFailureForValue(null);
        });

        it('fails on undefined input', function () {
            expectFailureForValue(void 0);
        });
    });
});
