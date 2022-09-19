const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['free', 'paid'],
        default: 'free',
    },
    amount: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
    },
    price: {
        type: Number,
    }
}, {timestamps: true,});

module.exports = mongoose.model('Ticket', TicketSchema)