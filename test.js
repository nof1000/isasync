const isAsync = require('./index.js');
const assert = require('assert');

describe('isAsync', () => {
    describe('String', () => {
        it('false', () => {
            assert.equal(isAsync('Hello world'), false);
        });
    });

    describe('Function', () => {
        it('false', () => {
            assert.equal(isAsync(function() {}), false);
        });
    });

    describe('Async Function', () => {
        it('true', () => {
            assert.equal(isAsync(async function() {}), true);
        });
    });

    describe('Class', () => {
        it('false', () => {
            assert.equal(isAsync(class {}), false);
        });
    });

    describe('Arrow Function', () => {
        it('false', () => {
            assert.equal(isAsync(() => {}), false);
        });
    });

    describe('Async Arrow Function', () => {
        it('true', () => {
            assert.equal(isAsync(async () => {}), true);
        });
    });

    describe('Number', () => {
        it('false', () => {
            assert.equal(isAsync(123), false);
        });
    });

    describe('Object', () => {
        it('false', () => {
            assert.equal(isAsync({}), false);
        });
    });

    describe('Array', () => {
        it('false', () => {
            assert.equal(isAsync([]), false);
        });
    });
});
