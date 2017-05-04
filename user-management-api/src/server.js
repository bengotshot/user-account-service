import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import register from './routes/register';


let config = {};
config.port = "8082";
config.mongoUri = "mongodb://mongo:27017";
const port = config.port;
const mongoUri = config.mongoUri;

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(mongoUri);
mongoose.Promise = global.Promise;


//Routes
app.post('/register', register);

app.use('*', ({res}) => res.sendStatus(404));

app.listen(port, ()=> console.log(`User Management Api started on port ${port}`));

