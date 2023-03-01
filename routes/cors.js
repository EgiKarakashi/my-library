const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptions);
