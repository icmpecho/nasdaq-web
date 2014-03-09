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
      describe('format_data_for_morris', function () {
      	it('should return data formatted for morris', function () {
      		var data = [
      			{ _ts: 1394348327, index: 4336.22, change: -15.91 },
      			{ _ts: 1394351935, index: 4346.22, change: -5.91 }
      		];
      		var expected = [
      			{ time: "13:58", index: 4336.22 },
      			{ time: "14:58", index: 4346.22 }
      		];
      		helper.format_data_for_morris(data).should.eql(expected);
      	});
      });
    });
})();
