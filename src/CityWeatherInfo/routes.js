const express=require('express');
const { emitWarning } = require('process');
const router=express.Router();

const WeatherHistoryController=require('./controller');
const controller=new WeatherHistoryController()

router.get('/search', (req, res) => controller.getWeatherInfo(req, res));
router.post('/save', (req, res) => controller.saveWeatherInfo(req, res));

module.exports=router;