const isAsync = require('./index.js');
const assert = require('assert');

describe('String', () => {
    it('Should be a false', () => {
        assert.equal(isAsync('Hello world'), false);
    });
});

describe('Function', () => {
    it('Should be a false', () => {
        assert.equal(isAsync(function() {}), false);
    });
});

describe('Async Function', () => {
    it('Should be a true', () => {
        assert.equal(isAsync(async function() {}), true);
    });
});

describe('Class', () => {
    it('Should be a false', () => {
        assert.equal(isAsync(class {}), false);
    });
});

describe('Arrow Function', () => {
    it('Should be a false', () => {
        assert.equal(isAsync(() => {}), false);
    });
});

describe('Async Arrow Function', () => {
    it('Should be a true', () => {
        assert.equal(isAsync(async () => {}), true);
    });
});

describe('Number', () => {
    it('Should be a false', () => {
        assert.equal(isAsync(123), false);
    });
});

describe('Object', () => {
    it('Should be a false', () => {
        assert.equal(isAsync({}), false);
    });
});

describe('Array', () => {
    it('Should be a false', () => {
        assert.equal(isAsync([]), false);
    });
});
