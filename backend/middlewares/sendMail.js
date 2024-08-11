const nodemailer = require('nodemailer');
const { createEvent } = require('ics');
require('dotenv').config();
const eventDetails = require('../models/eventDetails');

// Set up Nodemailer with SendGrid (you can use any SMTP server)
const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
        user: 'apikey',
        pass: process.env.API_KEY, // Replace with your actual SendGrid API Key
    },
    tls: {
        rejectUnauthorized: false // Disable certificate validation
    }
    // service: 'gmail',
    // auth: {
    //     user: '',
    //     pass: ''
    // }
});

// const mailOptions = {
//     from: 'noreply@example.com', // Your sender email
//     to: email,
//     subject: `Thank You for Registering for ${eventName}`,
//     text: `Dear Attendee,\n\nThank you for registering for ${eventName}. We look forward to your participation.\n\nBest Regards,\nEvent Team`,
//     html: `<p>Dear Attendee,</p><p>Thank you for registering for <strong>${eventName}</strong>. We look forward to your participation.</p><p>Best Regards,<br/>Event Team</p>`
// };


// try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: %s', info.messageId);
// } catch (error) {
//     console.error('Error sending email:', error);
// }

const convertToDate = (dateStr) => {
    const day = dateStr.slice(0, 2);
    const month = dateStr.slice(2, 4);
    const year = dateStr.slice(4, 8);
    return new Date(`${year}-${month}-${day}`);
};


const sendMail = async(email, eventId, registrationDate, firstName) => {
    // console.log(eventId)
    const eventDetail = await eventDetails.findById(eventId);
    // console.log(eventDetail)
    if (!eventDetail) {
        console.error(`No event found with ID: ${eventId}`);
        return; // or handle this case appropriately, e.g., return an error response
    }
    const { eventName, eventDate, eventTime, description } = eventDetail;
    const meetingLink = process.env.meetingLink;
    // const date = eventDate.map(() => convertToDate());
    const date = convertToDate(registrationDate.slice(0, 8));
    const time1 = registrationDate.slice(8, 12);
    const time2 = registrationDate.slice(12, 16);
    const gmtHour = registrationDate.slice(16, 18);
    const gmtMin = registrationDate.slice(18, 20);
    const formattedDate = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'long', year: 'numeric' }).format(date);
    const startHour = time1.slice(0, 2);
    const startMin = time1.slice(2, 4);
    const endHour = time2.slice(0, 2);
    const endMin = time2.slice(2, 4);
    // console.log(date, "-", startHour, "-", startMin, "-", endHour, "-", endMin, "-", gmtHour, "-", gmtMin);
    const event = {
        start: [date.getFullYear(), date.getMonth() + 1, date.getDate(), Number(startHour), Number(startMin)],
        duration: { hours: 1 }, //to be edited accordingly afterwards
        title: eventName,
        description,
        location: 'virtual',
        url: meetingLink,
        status: 'CONFIRMED',
        busyStatus: 'BUSY',
        organizer: { name: 'LuminaVista organizer', email: 'organizer@example.com' },
        attendees: [
            { name: `${firstName}`, email: 'email@test.com' }
        ]
    };

    createEvent(event, async(error, value) => {
        if (error) {
            console.log(error);
            // return res.status(500).send("Error creating calendar event.");
            return
        }
        const mailOptions = {
            from: 'gangradevidushi7@gmail.com', // Your sender email
            to: email,
            subject: `Welcome Lumina Vista's "${eventName}" event.`,
            html: `
                <p>Thank you for registering for our upcoming event, "${eventName}"! We're excited to have you join us and look forward
                to sharing valuable insights and information.</p>
                <p>Below attached are the event details and a link to join the event. If you have any 
                questions or need assistance, feel free to reach out to us.</p>
                <p>See you soon!</p>
                <p>Best regards,<br>The Lumina Vista Team</p>
                <p>Event Details:</p>
                <i>
                <p>${eventName} @ Lumina Vista
                <br>${formattedDate}, ${startHour}:${startMin} - ${endHour}:${endMin} GMT+${gmtHour}:${gmtMin}
                <br>Webinar             
                </p>
                <!-- <p><strong>Event Date:</strong> ${date.toDateString()}</p> -->
                <p><a href="${meetingLink}">Join Zoom meeting</a>
                <br>Meeting Password: example
                </p>
                </i>
                <p>
                <button class="dropdown" style="background-color: #5D5BD4; font-color: white; padding: 10px 20px; border: 1px solid black; border-radius: 4px; cursor: pointer;">

                    <a href="https://calendar.google.com/calendar/r/eventedit?text=${eventName}&dates=20240812T170000/20240812T180000&location=${meetingLink}&details=${description}" target="_blank">
                        Google Calendar
                    </a>
                </button>
                <button class="dropdown" style="background-color: #5D5BD4; font-color: white; padding: 10px 20px; border: 1px solid black; border-radius: 4px; cursor: pointer;">

                    <a href="https://outlook.live.com/owa/?path=/calendar/action/compose&rru=addevent&startdt=20240812T170000&enddt=20240812T180000&
                    subject=${eventName}&body=${description}&location=${meetingLink}" target="_blank">
                        Outlook Calendar
                    </a>
                </button>
                <button class="dropdown" style="background-color: #5D5BD4; font-color: white; padding: 10px 20px; border: 1px solid black; border-radius: 4px; cursor: pointer;">
                    <a href="data:text/calendar;charset=utf8,${eventName}&body=${description}&location=${meetingLink}" download="event.ics">
                    Apple Calendar
                    </a>
                </button>
                </p>          
            `,
            icalEvent: {
                filename: 'event.ics',
                method: 'request',
                content: value
            },
            attachments: [{
                filename: 'event.ics',
                content: value,
                contentType: 'text/calendar',
            }, ],
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
            // next();
        } catch (err) {
            console.error('Error sending email:', err);
            // res.status(500).send('Error sending email.');
        }
    })

};

module.exports = sendMail;