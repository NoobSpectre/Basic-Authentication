require('dotenv').config();
const express = require('express');
const routes = require('./routes/users');

const app = express();

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/hello', routes);

const PORT = process.env.PORT || 7050;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
