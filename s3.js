'use strict';

const AWS = require('aws-sdk');

let s3Conifg=() => {
  return Object.assign({}, {
  	endpoint: process.env.S3_ENDPOINT_URL
  });
};

module.exports = new AWS.S3(s3Conifg());