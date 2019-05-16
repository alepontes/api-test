const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    group: {
        type: String
    }
});

module.exports = mongoose.model('Item', ItemSchema);