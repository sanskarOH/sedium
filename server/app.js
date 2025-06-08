import express from 'express'
import Loaders from './config/index.js'
async function start() {
    const app = express();
    await Loaders(app);
    app
        .listen(5000, ()=>{
            console.log(
                '------------ Server listening on port:5000------------'
            );
            
        })
        .on('error', (e)=>{

            console.log(e);
            process.exit(1);
        })
}
start();