import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import login from './routes/login';
import createSession from './routes/createSession';
import authorise from './routes/authorise';
import retrieve from './routes/retrieve';

let config = {};
config.port = "8081";
config.mongoUri = "mongodb://mongo:27017";
const port = config.port;
const mongoUri = config.mongoUri;

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose.connect(mongoUri).then(console.log(`Successfully connected to: ${mongoUri}`));


//Routes
app.post('/user/auth/login', login, createSession);

app.post('/user/auth/auth', authorise);

app.get('/user/details', retrieve);

app.use('*', ({res}) => res.sendStatus(404));

app.listen(port, ()=> console.log(`User Management Api started on port ${port}`));

