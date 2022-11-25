const express=require('express');
const app=express();
const WeatherHistoryRoutes=require('./CityWeatherInfo/routes');
const database=require('./config/db-config');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
const corsOptions={
    origin:'http://localhost:3030',
    optionsSuccessStatus: 200
}

mongoose.connect(database.uri/*,{ useNewUrlParser: true }*/);
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.post('/save',(req, res)=>{
    res.set('Access-Control-Allow-Credentials','true'),
    res.set('Access-Control-Allow-Origin', 'http://localhost:3030'),
    res.set('Access-Control-Allow-Methods','GET, POST'),
    res.set('Access-Control-Allow-Headers','X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization')
});

const banco=require('./CityWeatherInfo/models');
banco.mongoose.connect(banco.uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log("banco conectado")
}).catch(err=>{
    console.log("nao foi possivel se conectar ao banco",err);
    process.exit();
})

app.use('/',cors(corsOptions),WeatherHistoryRoutes)

app.listen(3030, () => console.log("Listening at 3030"));