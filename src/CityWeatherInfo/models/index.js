const dbconfig=require('../../config/db-config');
const mongoose=require('mongoose');
mongoose.Promise=global.Promise;

const banco={};
banco.mongoose=mongoose;
banco.uri=dbconfig.uri;
banco.weatherModel=require('./model')(mongoose);

module.exports=banco;