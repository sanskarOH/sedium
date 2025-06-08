import { Router} from "express";
import testController from "./test/test.controller.js";

export default () =>{

    const app = Router();
    console.log("🔧 Mounting test controller");
    app.use('/test',testController());
     console.log("🔧 Main API router created");
    return app;

}