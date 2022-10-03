const multer = require('multer');

const storage = multer.diskStorage({
  destination: 'files/',
  filename: (req, file, cb) => {
    const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1e5);
    cb(null, uniquePrefix + '-' + file.originalname);
  },
});

const fileUploader = multer({
  storage,
  fileFilter: (req, file, cb) => {
    cb(null, true);
  },
  limits: {
    fileSize: 10000100,
  },
});

module.exports = fileUploader;
