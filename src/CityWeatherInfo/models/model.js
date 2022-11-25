const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const HowsTheWeatherSchema=new Schema({
    "cidade": {type: String},
    "pais": {type: String},
    "temperatura":{type: String},
    "pressaoatm":{type: String},
    "termica":{type: String},
    "umidade":{type: String},
    "vento":{type: String},
    "datahora":{type: String}
});

module.exports=mongoose.model('howstheweather',HowsTheWeatherSchema);