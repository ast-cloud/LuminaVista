const express = require('express');
const router = express.Router();
const userDetails = require('../models/userDetails');
const sendMail = require('../middlewares/sendMail');

//Regex Patterns
const charPattern = /^[a-zA-Z ]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post('/userDetails', async(req, res) => {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        areaOfInterest,
        comments,
        eventId,
        registrationDate
    } = req.body;
    console.log('Request body - ',req.body);
    if (!charPattern.test(firstName) || !charPattern.test(lastName)) {
        console.log('here 1');
        return res.status(400).send({ message: "First and Last Name must contain alphabets only" });
    }

    // Check mandatory fields
    if (!firstName || !lastName || !email || !phoneNumber || !areaOfInterest) {
        console.log('here 2');
        return res.status(400).send({ message: "First Name, Last Name, Email, Phone Number, and Area of Interest are required" });
    } else if (!charPattern.test(firstName) || !charPattern.test(lastName)) {
        console.log('here 3');
        return res.status(400).send({ message: "First and Last Name must contain alphabets only" });
    } else if (!emailPattern.test(email)) {
        console.log('here 4');
        return res.status(400).send({ message: "Invalid email format" });
    } else if (isNaN(phoneNumber)) {
        console.log('here 5');
        return res.status(400).send({ message: "Invalid Phone format" })
    } else if (phoneNumber.length < 10 || phoneNumber.length > 10) {
        console.log('here 6');
        return res.status(400).send({ message: "Enter valid phone number" });
    }

    try {
        const newUserDetails = new userDetails({
            firstName,
            lastName,
            email,
            phoneNumber,
            areaOfInterest,
            comments: comments || null
        });
        //create new userdetails object using mongoose
        const response = await newUserDetails.save();
        await sendMail(email, eventId, registrationDate, firstName)
        return res.status(200).json({ response: response })

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error" });
    }


})
module.exports = router;