const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const legenduploadSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    number: {type: Number},
    name: {type: String},
    desc: {type: String},
    profileImg: {
        type: String
    }
}, {
    collection: 'legenduploads'
})

module.exports = mongoose.model('Legendupload', legenduploadSchema)
