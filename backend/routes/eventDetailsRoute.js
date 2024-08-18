const express = require('express');
const router = express.Router();
const eventDetails = require('../models/eventDetails');

router.post('/event', async(req, res) => {
    try {
        const { eventName, eventDate, eventTime, description, meetingLink } = req.body;

        // Check for mandatory fields
        if (!eventName || !eventDate || !eventTime || !description || !meetingLink) {
            return res.status(400).json({ message: "Event name, date, time description and meeting link are required" });
        }

        //Function to convert DDMMYYYY to YYYY-MM-DD
        const convertToDate = (dateStr) => {
            const day = dateStr.slice(0, 2);
            const month = dateStr.slice(2, 4);
            const year = dateStr.slice(4, 8);
            return new Date(`${year}-${month}-${day}`);
        };

        //Parse the eventDate from string to Date object and store it in an array
        const formattedDates = eventDate.map(dateString => convertToDate(dateString));

        //create new event object using mongoose
        const newEvent = new eventDetails({
            eventName,
            eventDate: formattedDates,
            eventTime,
            description,
            meetingLink
        });

        const response = await newEvent.save();
        return res.status(200).json({ response: response })
    } catch (error) {
        res.status(500).send('Error saving event data: ' + error.message);
    }

})

// GET API to fetch all events
router.get('/event', async(req, res) => {
    try {
        const response = await eventDetails.find();
        return res.status(200).json({ response: response })
    } catch (error) {
        res.status(500).send('Error saving event data: ' + error.message);
    }
});

// GET API to fetch a single event by ID
router.get('/event/:id', async(req, res) => {
    try {
        const event = await eventDetails.findById(req.params.id);

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        return res.status(200).json({ event: event });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching event', error: error.message });
    }
});






module.exports = router;