const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
        fullName: {
            type: String,
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            default: false
        },
        fieldOfExpertise: {
            type: String,
        },
        yearsOfExperience: {
            type: Number,
        },
        typeOfMentor: {
            type: String,
        },
        message: {
            type: String,
            required: true
        },
    })
    //create mentor model
const mentormodel = mongoose.model('mentor', mentorSchema);

//export mentor model
module.exports = mentormodel;