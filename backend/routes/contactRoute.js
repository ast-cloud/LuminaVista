const express = require('express');
const router = express.Router();
const contact = require('../models/contact');
const sendContactMail = require('../middlewares/sendContactMail');
const { upload, handleFileUpload } = require('../middlewares/upload');

router.post('/contact', upload, handleFileUpload, async(req, res) => {
    try {
        var mailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var charPattern = /^[a-zA-Z ]+$/;
        const { fullName, email, phoneNumber, methodOfContact, help, areaOfInterest, message, subscribeToMarketing, files } = req.body;

        // Check for mandatory fields
        if (!fullName || !email || !phoneNumber || !methodOfContact) {
            return res.status(400).json({ message: "name, email, phoneNumber and method of contact are required" });
        } else if (!charPattern.test(fullName)) {
            return res.status(400).send({ message: "name must contain alphabets only" });
        } else if (!mailPattern.test(email)) {
            return res.status(400).send({ message: "Invalid email format" });
        } else if (isNaN(phoneNumber)) {
            return res.status(400).send({ message: "Invalid Phone format" })
        } else if (phoneNumber.length < 10 || phoneNumber.length > 10) {
            return res.status(400).send({ message: "Enter valid phone number" });
        }


        //create new contact object using mongoose
        const newContact = new contact({
            fullName,
            email,
            phoneNumber,
            methodOfContact,
            help: help || null,
            areaOfInterest: areaOfInterest || null,
            message,
            subscribeToMarketing,
            files: req.uploadedFiles,
        });

        const contactDetails = {
            fullName,
            email,
            phoneNumber,
            methodOfContact,
            help: help || null,
            areaOfInterest: areaOfInterest || null,
            message,
            subscribeToMarketing,
            files: req.uploadedFiles,
        };

        const response = await newContact.save();
        await sendContactMail(contactDetails)
        return res.status(200).json({ response: response })

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error" });
    }


})


module.exports = router;