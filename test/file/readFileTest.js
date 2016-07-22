const assert = require('assert');
const mocha = require('mocha');
const readFile = require('../../lib/file/readFile');
const path = require('path');
const td = require('testdouble');
require('co-mocha');

describe('read file', function () {
    it('[unit test] should read content of a file', function *() {
        const fs = {
            readFile: function (file, encoding, cb) {
                assert.equal(file, 'file');
                assert.equal(encoding, 'UTF-8');
                cb(null, 'content');
            }
        };
        const read = readFile(fs);

        const result = yield read('file');

        assert.equal(typeof result, 'string');
        assert.equal(result, 'content');
    });

    it('[unit test with mocking library] should read content of a file', function *() {
        const fs = td.object();
        td.when(fs.readFile('file', 'UTF-8')).thenCallback(null, 'content');
        const read = readFile(fs);

        const result = yield read('file');

        assert.equal(result, 'content');
    });

    it('[unit test] should fail on nonexistent file', function *() {
        const fs = {
            readFile: function (file, encoding, cb) {
                assert.equal(file, 'file');
                return cb('error');
            }
        };
        const read = readFile(fs);

        try {
            yield read('file');
            throw 'should not get here';
        } catch (e) {
            assert.equal(e, 'Cannot read file file');
        }
    });

    it('[unit test with mocking library] should fail on nonexistent file', function *() {
        const fs = td.object();
        td.when(fs.readFile('file', 'UTF-8')).thenCallback('error');
        let read = readFile(fs);

        try {
            yield read('file');
            throw 'should not get here';
        } catch (e) {
            assert.equal(e, 'Cannot read file file');
        }
    });

});