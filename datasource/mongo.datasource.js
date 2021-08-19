/*  
All the data connection for mongo db will be specified here
*/
require('dotenv').config();
const mongoose = require('mongoose');
const conn = mongoose.createConnection(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = conn;