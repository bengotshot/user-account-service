import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import login from './routes/login';
import createSession from './routes/createSession';
import authorise from './routes/authorise';
import calls from './calls/calls';

let config = {};
config.port = "8081";
config.mongoUri = "mongodb://mongo:27017";
const port = config.port;
const mongoUri = config.mongoUri;

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(mongoUri).then(console.log(`Successfully connected to: ${mongoUri}`));
mongoose.Promise = global.Promise;


//Routes
app.post('/user/auth/login', login, createSession);

app.post('/user/auth/auth', authorise);

app.get('/user/auth', ({res}) => res.send("Hello world"));

app.use('*', ({res}) => res.sendStatus(404));

app.listen(port, ()=> console.log(`User Management Api started on port ${port}`));

