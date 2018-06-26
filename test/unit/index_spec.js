'use strict';

const path = require('path');
// const fs = require('fs-extra');
// const flatten = require('flat');
// const events = require('events');
// const chai = require('chai');
// const sinon = require('sinon');
const expect = require('chai').expect;
// chai.use(require('sinon-chai'));
// require('mocha-sinon');
const hapi = require('../../index');
const APIKEY = process.env.APIKEY || 'DUMMY KEY';
const HOLIDAY = new hapi();
const HOLIDAY_WITH_KEY = new hapi(APIKEY);
const HOLIDAY_WITH_KEY_OBJECT = new hapi({ key: APIKEY });
const HOLIDAY_WITH_INVALID_KEY_OBJECT = new hapi({ invalidkey: APIKEY });
// console.log({ hapi, holidaysFunction });

describe('HolidayAPI', function () {
  // this.timeout(10000);
  describe('Holiday API Class', function () {
    // console.log({ HOLIDAY, HOLIDAY_WITH_KEY, HOLIDAY_WITH_KEY_OBJECT, HOLIDAY_WITH_INVALID_KEY_OBJECT });
    it('should export a class for making holiday API requests', () => {
      expect(hapi).to.be.an('function');
      expect(HOLIDAY).to.be.an('object');
      expect(HOLIDAY.key).to.be.undefined;
      expect(HOLIDAY_WITH_INVALID_KEY_OBJECT.key).to.be.undefined;
    });
    it('should assign a key as the only parameter', () => {
      expect(HOLIDAY_WITH_KEY.key).to.eql(APIKEY);
    });
    it('should assign a key as and option in an options obejct', () => {
      expect(HOLIDAY_WITH_KEY_OBJECT.key).to.eql(APIKEY);
    });
  });
  describe('v1', function () { 
    it('should have a static vi property', () => {
      expect(hapi.v1).to.be.an('object');
    });
    it('should have a holidays function', () => {
      expect(hapi.v1.holidays).to.be.an('function');
    });
    it('should have a holidays function', () => {
      expect(hapi.v1.holidays).to.be.an('function');
    });
  });
  describe('vi.holidays', function () { 
    it('should return a promise', (done) => {
      const holidaysPromise = hapi.v1.holidays()
        .catch(() => {
          done();
         });
      expect(holidaysPromise).to.be.a('promise');
    })
    it('should return a holiday data', (done) => {
      if (APIKEY !== 'DUMMY KEY') {
        HOLIDAY_WITH_KEY.v1.holidays({
          country: 'US',
          year: 2017,
        })
          .then(apiResponse => {
            expect(apiResponse).to.be.an('object');
            expect(apiResponse.status).to.eql(200);
            expect(apiResponse.holidays).to.be.an('object');
            done();
          })
          .catch(done);
      } else {
        done();
      }
    });
    it('should handle errors', (done) => {
      HOLIDAY_WITH_KEY.v1.holidays()
        .then(apiResponse => {
          done(new Error('Should throw an api response error'));
        })
        .catch(e => {
          expect(e).to.not.be.empty;
          done();
        });
    });
    it('should handle invalid api key', (done) => {
      HOLIDAY_WITH_KEY.v1.holidays({key:'invalidkey'})
        .then(apiResponse => {
          done(new Error('Should throw an api response error'));
        })
        .catch(e => {
          expect(e).to.not.be.empty;
          done();
        });
    });
  });
});