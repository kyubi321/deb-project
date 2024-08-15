import express from 'express';
import apiroutes from './api-routes.js';
import cors from 'cors';


const listen_port =3005

const app = express()

app.use(cors({origin:"*"}));
app.use('/',apiroutes);

app.listen(listen_port, () => {
    console.log(`example app listening on port ${listen_port}`)
})