const { connect, connection } = require('mongoose');

// Set up connection string that will work on heroku or some external db
const connectionString = process.env.MONGODB_UIR || 'mongodb://127.0.0.1:27017/friendsDB';

connect(connectionString);
module.exports = connection;