const express = require('express');
const cors = require('cors');
const fs = require('fs');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
app.use(logger('dev'));
app.use(cors()); // so that app can access
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const bookings = JSON.parse(fs.readFileSync('./server/bookings.json'))
  .map((bookingRecord) => ({
    // time: Date.parse(bookingRecord.time),
    time: bookingRecord.time,
    duration: bookingRecord.duration * 60 * 1000, // mins into ms
    userId: bookingRecord.user_id,
  }))

app.get('/bookings', (_, res) => {
  res.json(bookings);
});

app.post('/bookings', (req, res) => {
  console.log(req.body)
  bookings.push(...req.body)
  res.json(bookings);
});

app.listen(3001);
