const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const ticketRoute = require('./routes/ticket');

const port = process.env.PORT || 3000
dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/ticket", ticketRoute)
 


app.listen(port, () => {
  console.log('Server started successfully. Connected to MongoDB.');
});