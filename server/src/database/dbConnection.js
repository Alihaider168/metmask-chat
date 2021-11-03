const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/task1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to database successfully'))
  .catch((err) => console.log(err));

module.exports = mongoose.connection;
