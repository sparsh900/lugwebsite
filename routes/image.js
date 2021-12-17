const router = require('express').Router();
let Book = require('../models/image.model');

router.post("/", (req, res) => {

  var imgPath = req.file.path;
  var image = Book.image.data = fs.readFileSync(imgPath);
  Book.image.contentType = 'image/jpg';

  var newBook = {image: image};
  Book.create(newBook, function(err, newlyCreated){
    if (err) {
        console.log(err);
    } else {
        console.log(newlyCreated);
    }
 });

})
module.exports = router;
