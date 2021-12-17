const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageuploadSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String
    }
}, {
    collection: 'imageuploads'
})

module.exports = mongoose.model('Imageupload', imageuploadSchema)
