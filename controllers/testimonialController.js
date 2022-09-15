const testimonialModel = require('../models/testimonialModel')

exports.get_Testimonial = (req,res)=>{
  testimonialModel.find((err,data)=>{
    if(err){
      res.send(err)
    }else{
      res.send(data);
    }
  })   
}

exports.save_Testimonial = (req, res,) => {
  const newTestimonial = new testimonialModel();    
    newTestimonial.name = req.body.name;
    newTestimonial.post = req.body.post;
    newTestimonial.testimonialDescription = req.body.testimonialDescription;
    newTestimonial.createdOn = req.body.createdOn;
    newTestimonial.lastUpdatedOn = req.body.lastUpdatedOn;
    newTestimonial.active = req.body.active;
    newTestimonial.image = req.file.path

    newTestimonial.save((err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.send("Data Inserted");
      }
    });
};

exports.delete_Testimonial = (req,res)=>{
  testimonialModel.findByIdAndDelete((req.body.id),(err,data)=>{
    if(err){
      res.send(err)
    }else{
      res.send("Deleted Sucessfully!")
    }
  })
}

exports.update_Testimonial = (req,res)=>{
  testimonialModel.findByIdAndUpdate((req.body.id), 
  {name:req.body.name,
    post:req.body.post,
    testimonialDescription:req.body.testimonialDescription,
    createdOn:req.body.createdOn,
    lastUpdatedOn:req.body.lastUpdatedOn,
    active:req.body.active},
  function(err, data) {
    if(err){
      res.send(err)
    }
    else{
        res.send("Data updated!")

    }
});  
}





