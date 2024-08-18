// middlewares/send Contact Email.js

const nodemailer = require('nodemailer');
// const contact = require('../models/contact');
require('dotenv').config();

const sendContactMail = async(contactDetails) => {
    const {
        fullName,
        email,
        phoneNumber,
        methodOfContact,
        help,
        areaOfInterest,
        message,
        subscribeToMarketing,
        files
    } = contactDetails
    console.log(contactDetails);

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.sendgrid.net',
            port: 587,
            auth: {
                user: 'apikey',
                pass: process.env.API_KEY, // Replace with your actual SendGrid API Key
            },
            // service: 'gmail',
            // auth: {
            //     user: '',
            //     pass: ''
            // }
        });

        // Prepare the attachments
        const attachments = files.map(file => ({
            filename: file.name,
            content: file.data,
            contentType: file.contentType,
        }));

        //mail options
        const mailOptions1 = {
            from: 'aastikyadav1997.ay@gmail.com',
            to: email,
            subject: 'Thank you for contacting us!',
            html: `
                <p>Dear ${fullName},</p>
                <p>Thank you for contacting us. Will get back to you soon.</p>
                <p>We will get back to you as soon as possible.</p>
                <p>Best regards,</p>
                <p>Lumina Vista</p>
            `,
        };

        const mailOptions2 = {
            from: 'aastikyadav1997.ay@gmail.com',
            to: 'gangradevidushi7@gmail.com',
            subject: 'New contact details',
            html: `
                <p>Dear Admin,</p>
                <p>Here are the details of person who tried contacting us.:</p>
                <ul>
                    <li><strong>Full Name:</strong> ${fullName}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Phone Number:</strong> ${phoneNumber}</li>
                    <li><strong>Method of Contact:</strong> ${methodOfContact}</li>
                    <li><strong>Help Needed:</strong> ${help || 'N/A'}</li>
                    <li><strong>Area of Interest:</strong> ${areaOfInterest || 'N/A'}</li>
                    <li><strong>Message:</strong> ${message}</li>
                    <li><strong>Subscribe to Marketing:</strong> ${(subscribeToMarketing)?'yes':'no'}</li>
                </ul>
                <p>We have saved the data in our system.</p>
                <p>Best regards,</p>
                <p>Lumina Vista</p>
            `,
            attachments:attachments
        };


        await transporter.sendMail(mailOptions1);
        await transporter.sendMail(mailOptions2);
        console.log('Email sent successfully');
    } catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({ error: "Error sending email." });
    }
};

module.exports = sendContactMail;