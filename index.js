const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

app.listen(8080, () => {
  console.log('Backend is running');
});