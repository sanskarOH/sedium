
import {initalizeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
}

// const firebaseApp = initalizeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// export {db}

async function intializeClient() {
    const client = initalizeApp(firebaseConfig);
    const db = getFirestore(client);
    return db;

}

export default async () => {
    if(!db){
        db = await intializeClient();
    }
    return db;
};