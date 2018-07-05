'use strict';

const express = require('express');
const s3 = require('../s3');
const router = express();

router.get('/', (req, res, next) => {
  s3.listBuckets((err, data) => {
	if (err) {
	  next(err);
	} else {
	  res.send(data);
	}
  });
});

module.exports = router;