/*  
All the schema will be specified here
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Records = new Schema({
  key: {
    type: String
  },
  createdAt: {
    type: Date
  },
  counts: {
    type: Array
  }
});

module.exports = Records;