const mongoose = require('mongoose');

const ContadorSchema = new mongoose.Schema({
  value: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Contador', ContadorSchema);

export default ContadorSchema;