import firebase from './firebase.js'
import express from './express.js'


export default async (app) =>{
    await firebase();
    console.log("Connection to database successful");
    express(app);
    console.log("Express Loaded");
    console.log("All modules loaded")
    
    
}