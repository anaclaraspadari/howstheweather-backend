const {HowsTheWeatherSchema}=require('./models/model');

class WeatherHistoryController{
    constructor(){}

    async getWeatherInfo(req, res){
        console.log("Procurando dados...");

        try{
            const dbs=HowsTheWeatherSchema.db;
            const coll=dbs.collection("howstheweather");
            let rest=await coll.find({}).toArray();
            res.json(rest);
    
            console.log("dados encontrados com sucesso");
    
        }catch(err){
            console.log("Error: "+err);
            res.status(404).json({error: err.message});
    
        }
    }

    async saveWeatherInfo(req, res){
        console.log("salvando dados");

        const weatherByCityInfo={cidade: req.body.cidade, temperatura: req.body.tempatual, pressaoatm: req.body.pressaoatm, termica: req.body.termica, umidade: req.body.umidade, vento: req.body.vento, datahora: req.body.datahora};

        console.log(weatherByCityInfo);

        try{
        
            const dbs=HowsTheWeatherSchema.db;
            const coll=dbs.collection("howstheweather");
            const rest=await coll.insertOne(weatherByCityInfo);
            res.json(rest);
            
            console.log("dados salvos com sucesso");

        }catch(err){

            console.log("Error: "+err);

        }
    }
}

module.exports=WeatherHistoryController;