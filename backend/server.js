// const express= require ("express");
// Rules for creating a local server through express
import express from 'express';

const app = express();


app.get('/',(req, res)=>{
    res.send('server is ready');
});

app.get('/jokes',(req, res)=>{
const jokes = [
    {
        id : 1,
        title: 'jokes num one',
        content : 'ekoda ek chilo gadha'

    },
    {
        id : 2,
        title: 'jokes num Two',
        content : 'ekoda ek chilo gadha 2'

    },
    {
        id : 3,
        title: 'jokes num Three',
        content : 'ekoda ek chilo gadha 3'

    },
    {
        id : 4,
        title: 'jokes num Four',
        content : 'ekoda ek chilo gadha 4'

    }
];
    res.send(jokes)
});

const port = process.env.PORT||3000;


app.listen(port, ()=>{
    console.log(`server is ready http://localhost:${port}`);
}
);