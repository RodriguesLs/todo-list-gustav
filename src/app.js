const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const { sequelize } = require('./models');

const taskRouter = require('./routes/task_routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

sequelize.sync().then(() => {
  console.log('Connect into db');
});

app.use(
  require('./router'),
  taskRouter
);

app.listen(PORT, () => {
  console.log('API is running in:', PORT);
});
