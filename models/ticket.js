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
    limit: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
    }
}, {timestamps: true,});

module.exports = mongoose.model('Ticket', TicketSchema)