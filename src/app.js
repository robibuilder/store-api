

const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

const batteries = [
    {
        id: 1,
        brand: "Hart",
        type: "batteries",
        image: "images/hart_battery.png",
        title: "Hart 20V Battery Holder",
        price: "$4.99",
        link: "https://www.ebay.com/itm/383881200540",
        description: "Very important product information."
    },
    { 
        id: 2,
        brand: "Craftsman",
        type: "batteries",
        image: "images/craftsman_battery.png",
        title: "Craftsman 20V Battery Holder",
        price: "$4.99",
        link: "https://www.ebay.com/itm/384421539579",
        description: "Very important product information."
    },
    {
        id: 3,
        brand: "DeWalt",
        type: "batteries",
        image: "images/dewalt_battery.png",
        title: "DeWalt 20V Battery Holder",
        price: "$4.99",
        link: "https://www.ebay.com/itm/383881200540",
        description: "Very important product information."
    },
    { 
        id: 4,
        brand: "Black & Decker",
        type: "batteries",
        image: "images/bd_battery.png",
        title: "Black & Decker 20V Battery Holder",
        price: "$4.99",
        link: "https://www.ebay.com/itm/383899226414",
        description: "Very important product information."
    },
    { 
        id: 5,
        brand: "Bauer",
        type: "batteries",
        image: "images/bauer_battery.png",
        title: "Bauer 20V Battery Holder",
        price: "$4.99",
        link: "https://www.ebay.com/itm/384040356820",
        description: "Very important product information."
    },
  ];

  const tools = [
    {
        id: 1,
        brand: "Hart",
        type: "tools",
        image: "images/hart_tool.png",
        title: "Hart 20V Tool Mount",
        price: "$4.99",
        link: "https://www.ebay.com/itm/384011739714",
        description: "Very important product information."
    },
    { 
        id: 2,
        brand: "Craftsman",
        type: "tools",
        image: "images/craftsman_tool.png",
        title: "Craftsman 20V Tool Mount",
        price: "$4.99",
        link: "https://www.ebay.com/itm/384011766136",
        description: "Very important product information."
    },
    {
        id: 3,
        brand: "DeWalt",
        type: "tools",
        image: "images/dewalt_tool.png",
        title: "DeWalt 20V Tool Mount",
        price: "$4.99",
        link: "https://www.ebay.com/itm/384011766136",
        description: "Very important product information."
    },
    { 
        id: 4,
        brand: "Black & Decker",
        type: "tools",
        image: "images/bd_tool.png",
        title: "Black & Decker Tool Mount",
        price: "$4.99",
        link: "https://www.ebay.com/itm/384421528132",
        description: "Very important product information."
    },
    // { 
    //     id: 5,
    //     brand: "Bauer",
    //     type: "Tool",
    //     image: "images/bauer_tool.png",
    //     title: "Bauer 20V Battery Holder",
    //     price: "$4.99",
    //     link: "https://www.ebay.com/itm/384040356820",
    //     description: "Very important product information."
    // },
  ];

// Endpoint to get all batteries
//
router.get('/batteries', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');

    res.status(200).json(batteries);
});

// Endpoint to get an individual battery by ID
//
router.get('/batteries/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    let id = req.params.id;
    let result = batteries.find((item) => item.id == id);

    res.status(200).json(result);
});

// Endpoint to get all tools
//
router.get('/tools', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');

    res.status(200).json(tools);
});

// Endpoint to get an individual tool by ID
//
router.get('/tools/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    let id = req.params.id;
    let result = tools.find((item) => item.id == id);

    res.status(200).json(result);
});

// Endpoint to get featured products
//
router.get('/featured', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    let id = req.params.id;
    let one = batteries.find((item) => item.id == 4);
    let two = tools.find((item) => item.id = 2);
    let three = batteries.find((item) => item.id = 3);

    const result = {
        one,
        two,
        three
    }

    res.status(200).json(result);
});

// Endpoint for testing only
//
router.get('/test', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.json({
        'Hello': 'hi'
    });
});

app.use('/.netlify/functions/app', router);

module.exports.handler = serverless(app);
