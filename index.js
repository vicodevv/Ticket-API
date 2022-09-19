const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');



app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);



app.listen(8080, () => {
  console.log('Backend is running');
});