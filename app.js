const express=require('express');
const prisma = require('./config/db.config');
const bodyParser=require('body-parser')
const cors=require('cors')
require('dotenv/config');

const router=require('./routes/router')

const app=express();
const port=process.env.PORT || 4001;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);








app.listen(port,console.log(`app running on port ${port}`))