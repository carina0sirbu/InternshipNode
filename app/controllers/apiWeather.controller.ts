import { Router } from "express";
import * as request from "request";

const router: Router = Router();

router.get("/", ((req, response) => {

  const request = require('request');
  let temperature: number = 0;
  let timezone: string = "";

  request('https://api.darksky.net/forecast/cce061cd09e3eb5f3a35f5550abeff73/37.8267,-122.4233', function (err: any, res: any, body: any) {

    let requestedBody = JSON.parse(body);
    console.log(requestedBody);

    timezone = requestedBody.timezone;
    temperature = requestedBody.currently.temperature;

    response.json({
      timezone,
      temperature
    });
  });


}));

export const WeatherController: Router = router;