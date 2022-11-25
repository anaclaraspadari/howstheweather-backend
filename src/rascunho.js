import { weatherInfoModel } from "../model/weather-model";
import { ObjectId } from "mongoose";

export const getWeatherInfo=async(req,res)=>{

    console.log("procurando dados");

    try{

        const dbs=weatherInfoModel.db;
        const coll=dbs.collection("weatherdatabycity");
        let rest=await coll.find({}).toArray();
        res.json(rest);

        console.log("dados encontrados com sucesso");

    }catch(err){

        console.log("Error: "+err);
        res.status(404).json({error: err.message});

    }
}

export const saveWeatherInfo=async(req,res)=>{

    console.log("salvando dados");

    const weatherByCityInfo={cidade: req.body.cidade, tempatual: req.body.tempatual, termica: req.body.termica, pressaoatm: req.body.pressaoatm, umidade: req.body.umidade, vento: req.body.vento, datahora: req.body.datahora, descricao: req.body.descricao};

    console.log(weatherByCityInfo);

    try{
    
        const dbs=weatherInfoModel.db;
        const coll=dbs.collection("weatherdatabycity");
        const rest=await coll.insertOne(weatherByCityInfo);
        
        console.log("dados salvos com sucesso");

    }catch(err){

        console.log("Error: "+err);

    }
}