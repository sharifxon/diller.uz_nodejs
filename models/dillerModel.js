const {model, Schema} = require('mongoose')

const dillerSchema = new Schema({
    image:{
        required: true,
        type: String,
    },
    title:{
        required: true,
        type: String,
    },
    description:{
        required: true,
        type: String,
    },
    price:{
        required: true,
        type: Number,
    }
})

module.exports = model('Diller', dillerSchema )