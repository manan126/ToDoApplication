const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MONGO_URI } = require('./config/keys');
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todos');

const app = express();

app.use(bodyParser.json());

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
