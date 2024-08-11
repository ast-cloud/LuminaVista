const express = require('express');
const router = express.Router();
const intern = require('../models/intern');


// router.post('/intern', async(req, res) => {
//     try {
//         var mailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         var charPattern = /^[a-zA-Z ]+$/;
//         let data = req.body;

//         console.log("data=", data)
//             //validation request
//         if (data.fullName === null || data.fullName === '') {
//             return res.status(400).send({ message: "Enter your name" })
//         } else if (!charPattern.test(data.fullName)) {
//             return res.status(400).send({ message: "Name should contain alphabets only" })
//         } else if (data.email === null || data.email === '') {
//             return res.status(400).send({ message: "Email is required" })
//         } else if (!data.email.match(mailPattern)) {
//             return res.status(400).send({ message: "Email is not in correct format" })
//         } else if (data.phoneNumber.toString().length != 10 && data.phoneNumber.toString().length != 0) {
//             return res.status(400).send({ message: "Enter valid phone number" });
//         }

//         // let formattedDate = date
//         if (data.date !== "") {
//             // Convert DDMMYYYY to YYYY-MM-DD
//             const day = data.date.slice(0, 2);
//             const month = data.date.slice(2, 4);
//             const year = data.date.slice(4, 8);
//             // formattedDate = `${year}-${month}-${day}`;
//             data.date = `${year}-${month}-${day}`;
//             data.date = new Date(data.date)

//         }
//         //create new intern object using mongoose
//         const newIntern = new intern(data);
//         const response = await newIntern.save();
//         return res.status(200).json({ response: response })

//     } catch (err) {
//         console.log(err)
//         res.status(500).json({ error: "Internal server error" });
//     }


// })

//Regex Patterns
const charPattern = /^[a-zA-Z ]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/; // Assumes phone number is 10 digits

// Function to convert DDMMYYYY to YYYY-MM-DD
const convertToDate = (dateStr) => {
    const day = dateStr.slice(0, 2);
    const month = dateStr.slice(2, 4);
    const year = dateStr.slice(4, 8);
    return new Date(`${year}-${month}-${day}`);
};

router.post('/intern', async(req, res) => {
    const {
        fullName,
        email,
        organizationName,
        position,
        modeOfContact,
        phoneNumber,
        website,
        levelOfPlacement,
        disciplines,
        Location,
        placementPosition,
        date,
        workingLocations,
        weeklyWorkTime,
        studentDuties,
        studentOutcomes,
        skillsAndAbilities,
        message
    } = req.body;

    // Check mandatory fields
    if (!fullName || !email) {
        return res.status(400).send('Full Name and Email are required');
    }

    if (fullName === null || fullName === '') {
        return res.status(400).send({ message: "Enter your name" })
    } else if (!charPattern.test(fullName)) {
        return res.status(400).send({ message: "Name should contain alphabets only" })
    }

    // Validate email
    if (!emailRegex.test(email)) {
        return res.status(400).send('Invalid email format');
    }

    // Validate phone number if provided
    if (phoneNumber && !phoneRegex.test(phoneNumber)) {
        return res.status(400).send('Invalid phone number format');
    }

    try {
        const newIntern = new intern({
            fullName,
            email,
            organizationName: organizationName || null,
            position: position || null,
            modeOfContact: modeOfContact || null,
            phoneNumber: phoneNumber || null,
            website: website || null,
            levelOfPlacement: levelOfPlacement || null,
            disciplines: disciplines || null,
            Location: Location || null,
            placementPosition: placementPosition || null,
            date: date ? convertToDate(date) : null,
            workingLocations: workingLocations ? workingLocations.split(',') : null,
            weeklyWorkTime: weeklyWorkTime || null,
            studentDuties: studentDuties || null,
            studentOutcomes: studentOutcomes || null,
            skillsAndAbilities: skillsAndAbilities || null,
            message: message || null
        });
        // await newIntern.save();
        // res.status(201).send('Intern data saved successfully');
        // newIntern = new intern(data);
        const response = await newIntern.save();
        return res.status(200).json({ response: response })
    } catch (error) {
        res.status(500).send('Error saving intern data: ' + error.message);
    }
});

module.exports = router;