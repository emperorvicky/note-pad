require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Notes = require('./routes/note')
const connectDB = require('./config/db')

connectDB()

const app = express();



app.use(
    cors({
    origin:'http://localhost:3000',
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
})
);

app.use(express.json());


app.use('/notes/data', Notes)

const port = process.env.PORT|| 5000;

app.listen(port, () => {console.log(`Server is running on ${port}...`)});