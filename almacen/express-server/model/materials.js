////////////////////////////// DEPENDENCIES //////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

////////////////////////////// STRUCTURE AND SCHEMA //////////////////////////////
const materialSchema = new Schema({
    routeName: String,
    name: String,
    cant: Number,
    locker: Number,
    available: Boolean,
    datasheet: String
});

module.exports = mongoose.model('materials', materialSchema);