const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    areaOfInterest: {
        type: [String],
        required: true,
    },
    registrationDate: {
        type: String,
        required: true,
    },
    comments: {
        type: String,
    }
});

// Create user details model
const userDetailsModel = mongoose.model('UserDetail', userDetailsSchema);

// Export user details model
module.exports = userDetailsModel;