/* global describe, it */

(function () {
    'use strict';
    var should = require('should');
    var helper = require('../../app/scripts/helper.js');
    describe('helper.js', function () {
      describe('format_time', function () {
        it('should return correct hour and minute from unix epoch', function () {
					helper.format_time(1394380727).should.equal('22:58');
        });
      });
    });
})();
