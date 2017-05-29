import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import register from './routes/register';
import update from './routes/update';
import validation from './middleware/validation';

const config = require('./config.json');

const port = config.port;
const mongoUri = config.mongoUri;

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(validation);

mongoose.Promise = global.Promise;
mongoose.connect(mongoUri).then(()=> console.log(`Successfully connected to: ${mongoUri}`));

//Routes
app.post('/register', register);
app.put('/update', update);


app.use('*', ({res}) => res.sendStatus(404));

app.listen(port, ()=> console.log(`User Management Api started on port: ${port}`));

