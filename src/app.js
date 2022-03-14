

const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

const batteries = [
    {
        id: 1,
        brand: 'Hart',
        name: 'Hart 20V Battery Mount'
    },
    { 
        id: 2,
        brand: 'Craftsman',
        name: 'Craftman V20* Battery Mount'
    },
    {
        id: 3,
        brand: 'DeWalt',
        name: 'DEWALT 20V Battery Mount'
    },
    { 
        id: 4,
        brand: 'Black & Decker',
        name: 'Black & Decker 20V Battery Mount'
    },
  ];

router.get('/batteries', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    // res.json({
    //     'Hello': 'hi'
    // });
    res.status(200).json(batteries);
});

router.get('/batteries/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    let id = req.params.id;
    let result = batteries.find((item) => item.id == id);

    res.status(200).json(result);
});

router.get('/test', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.json({
        'Hello': 'hi'
    });
});

app.use('/.netlify/functions/app', router);

module.exports.handler = serverless(app);