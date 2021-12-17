let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    {v4: uuidv4} = require('uuid'),
    router = express.Router();

const DIR = './uploads/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

// User model
let Imageupload = require('../models/imageupload.model');

router.post('/user-profile', upload.single('profileImg'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const imageupload = new Imageupload({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        profileImg: url + '/uploads/' + req.file.filename
    });
    imageupload.save().then(result => {
        res.status(201).json({
            message: "User registered successfully!",
            imageCreated: {
                _id: result._id,
                profileImg: result.profileImg
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})

router.get("/", (req, res, next) => {
    Imageupload.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            imageuploads: data
        });
    });
});

module.exports = router;
