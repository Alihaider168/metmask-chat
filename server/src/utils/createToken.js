const signToken = require('./signToken');

const createToken = async (userId, userRole) => {
  console.log('hhhhhhhhhhhellllllllllloooo');
  const payload = {};
  payload._id = userId._id;

  if (userRole === 'admin') payload.role = 'admin';

  return signToken(payload);
};

module.exports = createToken;
