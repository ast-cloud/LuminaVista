const mongoose = require('mongoose');

const internSchema = new mongoose.Schema({
        fullName: {
            type: String,
            required: true,
        },
        organizationName: {
            type: String,
        },
        position: {
            type: String,
        },
        modeOfContact: {
            type: String,
            enum: ['email', 'phone'], //check with astik
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
        },
        website: {
            type: String,
        },
        levelOfPlacement: {
            type: String,
            enum: ['Undergraduate', 'Graduate']
        },
        disciplines: {
            type: String,
        },
        Location: {
            type: String,
        },
        placementPosition: {
            type: String,
        },
        date: {
            type: Date,
        },
        workingLocations: {
            type: [String],
        },
        weeklyWorkTime: {
            type: String,
        },
        studentDuties: { //cover roles,task,responsibility
            type: String,
        },
        studentOutcomes: {
            type: String,
        },
        skillsAndAbilities: {
            type: String,
        },
        message: {
            type: String,
        }
    })
    //create intern model
const internmodel = mongoose.model('intern', internSchema);

//export intern model
module.exports = internmodel;