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
let Legendupload = require('../models/legendupload.model');
var idimage;
router.post('/user-profile', upload.single('profileImg'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host');
    idimage = new mongoose.Types.ObjectId();
    const legendupload = new Legendupload({
        _id: idimage,
        number: req.body.number,
        name: req.body.name,
        desc: req.body.desc,
        profileImg: url + '/uploads/' + req.file.filename
    });
    legendupload.save().then(result => {
        res.status(201).json({
            message: "User registered successfully!",
            imageCreated: {
                _id: result._id,
                number: result.number,
                name: result.name,
                desc: result.desc,
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
/*router.post('/legend', (req, res) => {
  const number = req.body.number;
  const name = req.body.name;
  const desc = req.body.desc;

  /*const newExercise = new Exercise({
    name,
    rollno,
    branch,
    email,
    phoneno,
    year,
  });*/
  /*Legendupload.update({_id: idimage}, {$set: {number: number , name: name , desc: desc}});

  /*newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));*/
//});


router.get("/", (req, res, next) => {
    Legendupload.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            legenduploads: data
        });
    });
});

module.exports = router;
