const {Schema, model} = require('mongoose');

const ListSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const List = model('list', ListSchema);

module.exports = List;