const express = require('express');
const router = express.Router();
const mentor = require('../models/mentor');

router.post('/mentor', async(req, res) => {
    try {
        var mailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var charPattern = /^[a-z A-Z]*$/;
        let {
            fullName,
            email,
            phoneNumber,
            fieldOfExpertise,
            yearsOfExperience,
            typeOfMentor,
            message
        } = req.body;

        // console.log("data=", data)
        // console.log("length=", data.phoneNumber.toString().length)

        //validation request
        if (!charPattern.test(fullName)) {
            return res.status(400).send({ message: "Name should contain alphabets only" })
        } else if (email === null || email === '') {
            return res.status(400).send({ message: "Email is required" })
        } else if (!email.match(mailPattern)) {
            return res.status(400).send({ message: "Email is not in correct format" })
        } else if (message === null || message === '') {
            return res.status(400).send({ message: "message is required" })
        } else if (phoneNumber.toString().length != 10 && phoneNumber.toString().length != 0) {
            return res.status(400).send({ message: "Enter valid phone number" });
        }

        //create new mentor object using mongoose
        const newMentor = new mentor({
            fullName: fullName || null,
            email,
            phoneNumber: phoneNumber || null,
            fieldOfExpertise: fieldOfExpertise || null,
            yearsOfExperience: yearsOfExperience || null,
            typeOfMentor: typeOfMentor || null,
            message
        });
        const response = await newMentor.save();
        return res.status(200).json({ response: response })

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error" });
    }


})




module.exports = router;