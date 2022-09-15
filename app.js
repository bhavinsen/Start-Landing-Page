const express = require('express');
require('./config/db.config')
const path = require('path');
const helmet = require('helmet')
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const testimonialRouter = require('./routers/testimonial.routes')
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(helmet());
app.use("/", testimonialRouter);

app.listen(PORT,()=>{
    console.log('listening on port',PORT);
})