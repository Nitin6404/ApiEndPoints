const mongoose = require('mongoose');

const numberSchema = new mongoose.Schema({
    no: {
        type: Number,
        required: true
    }
});

const stringSchema = new mongoose.Schema({
    string: {
        type: String,
        required: true
    }
});

module.exports = {
    Number: mongoose.model('Number', numberSchema),
    String: mongoose.model('String', stringSchema)
};
