const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: String,
    data: Buffer,
    contentType: String,
});

const contactSchema = new mongoose.Schema({
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        methodOfContact: {
            type: String,
            enum: ['email', 'phone'],
            required: true
        },
        help: {
            type: String,
            enum: ['Book my 30 mins free session now', 'Study in Australia', 'Migrate to Australia',
                'Job ready Programs', 'Career Counselling', 'Mentorship', 'Internship'
            ],
        },
        areaOfInterest: {
            type: String,
            enum: ['Engineering and Technology', 'Business and Management', 'Computer Science and IT',
                'Finance and Accounting', 'Others (Specify in the message)', 'AI & ML', 'Cyber Security'
            ],
        },
        message: {
            type: String,
        },

        subscribeToMarketing: {
            type: Boolean,
            default: false
        },
        files: [fileSchema]

    })
    //create contact model
const contactmodel = mongoose.model('contact', contactSchema);

//export contact model
module.exports = contactmodel;