const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./router')(app);

app.listen(3000, () => {
  console.log('API is running in:', 3000);
});
