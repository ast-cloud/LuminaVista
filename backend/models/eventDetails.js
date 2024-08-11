const mongoose = require('mongoose');

const eventDetailsSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    eventDate: {
        type: [Date],
        required: true,
    },
    eventTime: { //time validation needed
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },


})

//create event model
const eventModel = new mongoose.model('eventDetail', eventDetailsSchema);

//export event model
module.exports = eventModel;