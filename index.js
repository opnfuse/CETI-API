const express = require('express');
const app = express();

const { config } = require('./config/config');
const cetiApi = require('./routes/ceti');

app.use(express.json());

// Routes
cetiApi(app);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
