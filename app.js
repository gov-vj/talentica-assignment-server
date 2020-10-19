const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const activityRoutes = require('./routes/activity');
const userRoutes = require('./routes/user');

const app = express();
const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }),
);
app.use('/activity', activityRoutes);
app.use('/user', userRoutes);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`application running on port: ${port}`));
