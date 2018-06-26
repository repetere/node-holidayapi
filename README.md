# node-holidayapi
[![Coverage Status](https://coveralls.io/repos/github/repetere/node-holidayapi/badge.svg?branch=master)](https://coveralls.io/github/repetere/node-holidayapi?branch=master) [![Build Status](https://travis-ci.org/repetere/node-holidayapi.svg?branch=master)](https://travis-ci.org/repetere/node-holidayapi)

Node.js library for [Holiday API](https://holidayapi.com)

## Installation

```shell
npm install --save @repetere/node-holidayapi
```

## Usage

```javascript
const HolidayAPI = require('node-holidayapi');
const hapi = new HolidayAPI('_YOUR_API_KEY_').v1;

const parameters = {
  // Required
  country: 'US',
  year:    2016,
  // Optional
  // month:    7,
  // day:      4,
  // previous: true,
  // upcoming: true,
  // public:   true,
  // pretty:   true,
};

hapi.holidays(parameters)
  .then(data=>{
    // Insert awesome code here...
  })
  .catch(error=>{
    //handle errors
  });
```

### Development

*Make sure you have grunt installed*

```sh
$ npm i -g grunt-cli jsdoc-to-markdown
```

For generating documentation
```sh
$ grunt doc
$ jsdoc2md index.js  > docs/api.md
```

### Testing

```sh
$ npm i
$ grunt test
```

### Contributing

Fork, write tests and create a pull request!


### Notes

Check out [https://github.com/repetere/node-holidayapi/blob/master/docs/api.md](https://github.com/repetere/node-holidayapi/blob/master/docs/api.md) for the full node holiday api Documentation
