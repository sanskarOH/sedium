import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import routes from '../api/index.js'



export default (app)=> {
    
    app.get('/healthcheck' , (req , res)=>{
        const healthcheck = {
            uptime : process.uptime(),
            message: 'OK',
            timestamp: Date.now()
        };
        try{
            return res.status(200).json(healthcheck);
        }catch(e){
            return res.status(503).send();
        }
    })
    app.enable('trust proxy');
    app.use(cors())
    app.use(bodyParser.json())
    app.use('/api',routes())


}

