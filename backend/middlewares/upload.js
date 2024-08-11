// middleware/fileUpload.js
const multer = require('multer');
const contact = require('../models/contact');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const handleFileUpload = (req, res, next) => {
    const files = req.files;
    if (!files) {
        return res.status(400).send("No files uploaded");
    }

    const uploadedFiles = files.map(file => ({
        name: file.originalname,
        data: file.buffer,
        contentType: file.mimetype,
    }));

    req.uploadedFiles = uploadedFiles;
    next();
};

module.exports = {
    upload: upload.array('files', 10), // Maximum 10 files
    handleFileUpload,
};