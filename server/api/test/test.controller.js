import { Router } from "express";


export default () => {
    const app = Router();
    app.get('/', (_req,res) =>{
        res.json({
            code: 200,
            message: "Server is running fine and good."
        })
    })
    return app;
}