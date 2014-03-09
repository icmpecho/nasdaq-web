/* global describe, it */

(function () {
    'use strict';
    var should = require('should');
    var helper = require('../../app/scripts/helper.js');
    describe('helper.js', function () {
      describe('format_time', function () {
        it('should return correct time from unix epoch', function () {
					helper.format_time(1394380727).should.equal(1394380727000);
        });
      });
      describe('format_data_for_morris', function () {
      	it('should return data formatted for morris', function () {
      		var data = [
      			{ _ts: 1394348327, index: 4336.22, change: -15.91 },
      			{ _ts: 1394351935, index: 4346.22, change: -5.91 }
      		];
      		var expected = [
      			{ time: 1394348327000, index: 4336.22 },
      			{ time: 1394351935000, index: 4346.22 }
      		];
      		helper.format_data_for_morris(data).should.eql(expected);
      	});
      });
    });
})();
