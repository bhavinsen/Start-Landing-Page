const express = require("express");
const router = express.Router();
const testimonialController = require('../controllers/testimonialController')
const upload = require('../middlewares/uploadProfile');

router.get("/api/getTestimonial",testimonialController.get_Testimonial)
router.post("/api/saveTestimonial",upload.single('image'),testimonialController.save_Testimonial)
router.post("/api/deleteTestimonial",testimonialController.delete_Testimonial)
router.post("/api/updateTestimonial",testimonialController.update_Testimonial)

module.exports = router;
