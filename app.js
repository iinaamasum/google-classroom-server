const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const newClassRouter = require('./routes/newClass.route');
const userInfoRoute = require('./routes/userInfo.route');
const classWorkRouter = require('./routes/classWork.route');

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// route
app.use('/api/v1/class', newClassRouter);
app.use('/api/v1/user-info', userInfoRoute);
app.use('/api/v1/class-work', classWorkRouter);

// root route
app.all('/', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is running.',
  });
});

module.exports = app;
