'use strict';

const https = require('https');
const qs = require('querystring');

/**
 * Returns data from the holiday api from a set of parameters
 * @param {String} [parameters.country] - Country is required, e.g. US,
 * @param {Number} [parameters.year] - Year is required, e.g. 2018
 * @param {Number} [parameters.month = 7] - month of the year
 * @param {Number} [parameters.day = 4] - day of the month
 * @param {Boolean} [parameters.previous = true]
 * @param {Boolean} [parameters.upcoming = true]
 * @param {Boolean} [parameters.public = true]
 * @param {Boolean} [parameters.pretty = true]
 * @returns {Promise} resolves API response data
 */
function holidays(parameters = {}) {
  const querystringObject = Object.assign(
    {},
    { key: this.key },
    parameters
  );
  const querystring = qs.stringify(querystringObject);
  const url = `https://holidayapi.com/v1/holidays?${querystring}`;

  return new Promise((resolve, reject) => {
    https.get(url, function (res) {
      res.on('data', function (data) {
        let error = null;
        try {
          data = JSON.parse(data);
        } catch (e) {
          data = {};
        }
        if (res.statusCode !== 200) {
          if ('undefined' === typeof data[ 'error' ]) {
            error = 'Unknown error.';
          } else {
            error = data.error;
          }
        }
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      })
        .on('error', reject);
    })
    .on('error', reject);
      
  });
}

/**
 * class for querying the holiday api
 * @class HolidayAPI
 * @property {String} this.key - API Key for holidayapi.com
 * @property {Object} this.v1 - api methods for v1
 * @param {String} options.key - API Key 
 */
class HolidayAPI {
  constructor(options = {}) {
    this.key = (typeof options === 'string')
      ? options
      : options.key;
    this.v1 = {
      holidays: holidays.bind(this), 
    };
  }
}

/** 
 * @static {Object} v1 - Version 1 of the holiday api
 * @memberOf HolidayAPI
*/
HolidayAPI.v1 = {
  holidays,
};

module.exports = HolidayAPI;