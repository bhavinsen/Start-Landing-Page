const mongoose = require('mongoose')
const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const testimonialSchema = new mongoose.Schema({
    testimonial_id:{
        type:ObjectId,
        auto:true
    },
    name:String,
    post:String,
    testimonialDescription:String,
    createdOn:Date,
    lastUpdatedOn:Date,
    active:Boolean,
    image: String,
})


module.exports =mongoose.model('testimonialModel',testimonialSchema)
