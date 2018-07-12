// Import everything from express and assign it to the express variable
import {Express, Request, Response} from "express";
import * as fromControllers from './controllers';
import * as bodyParser from 'body-parser';
const express =require('express');

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

app.use('/projects', fromControllers.ProjectController);
app.use('/tasks', fromControllers.TaskController);
app.use('/stories', fromControllers.StoriesController);
app.use('/weather', fromControllers.WeatherController);


const port = process.env.PORT || '8080';
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});