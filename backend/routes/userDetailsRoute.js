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
    if (!charPattern.test(firstName) || !charPattern.test(lastName)) {
        return res.status(400).send({ message: "First and Last Name must contain alphabets only" });
    }

    // Check mandatory fields
    if (!firstName || !lastName || !email || !phoneNumber || !areaOfInterest || !registrationDate) {
        return res.status(400).send({ message: "First Name, Last Name, Email, Phone Number,Area of Interest, registrationDate are required" });
    } else if (!charPattern.test(firstName) || !charPattern.test(lastName)) {
        return res.status(400).send({ message: "First and Last Name must contain alphabets only" });
    } else if (!emailPattern.test(email)) {
        return res.status(400).send({ message: "Invalid email format" });
    } else if (isNaN(phoneNumber)) {
        return res.status(400).send({ message: "Invalid Phone format" })
    } else if (phoneNumber.length < 10 || phoneNumber.length > 10) {
        return res.status(400).send({ message: "Enter valid phone number" });
    }


    // //Function to convert DDMMYYYY to YYYY-MM-DD
    // const convertToDate = (dateStr) => {
    //     const day = dateStr.slice(0, 2);
    //     const month = dateStr.slice(2, 4);
    //     const year = dateStr.slice(4, 8);
    //     return new Date(`${year}-${month}-${day}`);
    // };

    // //Parse the eventDate from string to Date object and store it in an array
    // const formattedDates = registrationDate.map(dateString => convertToDate(dateString));


    try {
        const newUserDetails = new userDetails({
            firstName,
            lastName,
            email,
            phoneNumber,
            areaOfInterest,
            registrationDate,
            comments: comments || null
        });
        //create new userdetails object using mongoose
        const response = await newUserDetails.save();
        //const response = { message: 'no data saved' }; //just for testing
        await sendMail(email, eventId, registrationDate, firstName)
        return res.status(200).json({ response: response })

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error" });
    }


})
module.exports = router;