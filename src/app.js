const express = require('express');
const serverless = require('serverless-http');
const mysql = require("mysql");


const app = express();
const router = express.Router();

const db = mysql.createConnection({
    host: "208.76.87.109",
    user: "aogmapax_owner",
    password: "secret", 
    database: "aogmapax_products_new", 
    port: "3306"
  });

// Connect to MySQL

db.connect((err) => {
  if (err) {
    throw err;
    // console.log("ERROR");
    // return;
  }
  console.log("MySql Connected");
});

db.executeQuery = (query, queryParams) => {
	return new Promise((resolve, reject) => {
		db.query(query, queryParams, (error, results) => {
			if (error) {
				reject(error)
				return
			}
			resolve(results)
		})
	})
};

const batteries = [
    {
        id: 1,
        brand: "Hart",
        type: "Battery",
        image: "images/hart_battery.png",
        title: "Hart 20V Battery Holder",
        price: "$4.99",
        link: "https://www.ebay.com/itm/383881200540",
        description: "Very important product information.",
        active: "true"
    },
    { 
        id: 2,
        brand: "Craftsman",
        type: "Battery",
        image: "images/craftsman_battery.png",
        title: "Craftsman 20V Battery Holder",
        price: "$4.99",
        link: "https://www.ebay.com/itm/384421539579",
        description: "Very important product information.",
        active: "true"
    },
    {
        id: 3,
        brand: "DeWalt",
        type: "Battery",
        image: "images/dewalt_battery.png",
        title: "DeWalt 20V Battery Holder",
        price: "$4.99",
        link: "https://www.ebay.com/itm/383881200540",
        description: "Very important product information.",
        active: "true"
    },
    { 
        id: 4,
        brand: "Black & Decker",
        type: "Battery",
        image: "images/bd_battery.png",
        title: "Black & Decker 20V Battery Holder",
        price: "$4.99",
        link: "https://www.ebay.com/itm/383899226414",
        description: "Very important product information.",
        active: "true"
    },
    { 
        id: 5,
        brand: "Bauer",
        type: "Battery",
        image: "images/bauer_battery.png",
        title: "Bauer 20V Battery Holder",
        price: "$4.99",
        link: "https://www.ebay.com/itm/384040356820",
        description: "Very important product information.",
        active: "true"
    },
  ];

  const tools = [
    {
        id: 1,
        brand: "Hart",
        type: "Tool",
        image: "images/hart_tool.png",
        title: "Hart Tool Mount",
        price: "$4.99",
        link: "https://www.ebay.com/itm/384011739714",
        description: "Very important product information.",
        active: "true"
    },
    { 
        id: 2,
        brand: "Craftsman",
        type: "Tool",
        image: "images/craftsman_tool.png",
        title: "Craftsman Tool Mount",
        price: "$4.99",
        link: "https://www.ebay.com/itm/384011766136",
        description: "Very important product information.",
        active: "true"
    },
    {
        id: 3,
        brand: "DeWalt",
        type: "Tool",
        image: "images/dewalt_tool.png",
        title: "DeWalt Tool Mount",
        price: "$4.99",
        link: "https://www.ebay.com/itm/384011766136",
        description: "Very important product information.",
        active: "true"
    },
    { 
        id: 4,
        brand: "Black & Decker",
        type: "Tool",
        image: "images/bd_tool.png",
        title: "Black & Decker tool Mount",
        price: "$4.99",
        link: "https://www.ebay.com/itm/384421528132",
        description: "Very important product information.",
        active: "true"
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

  const featured = [
    {
        id: 1,
        brand: "Hart",
        type: "tools",
        image: "images/hart_tool.png",
        title: "Hart Tool Mount",
        price: "$4.99",
        link: "https://www.ebay.com/itm/384011739714",
        description: "Very important product information.",
        active: "true"
    },
    {
        id: 3,
        brand: "DeWalt",
        type: "batteries",
        image: "images/dewalt_battery.png",
        title: "DeWalt 20V Battery Holder",
        price: "$4.99",
        link: "https://www.ebay.com/itm/383881200540",
        description: "Very important product information.",
        active: "true"
    },
    { 
        id: 4,
        brand: "Black & Decker",
        type: "tools",
        image: "images/bd_tool.png",
        title: "Black & Decker tool Mount",
        price: "$4.99",
        link: "https://www.ebay.com/itm/384421528132",
        description: "Very important product information.",
        active: "true"
    },
 ];

 router.get("/newtest", async (req, res) => {
    let result = await db.executeQuery("SELECT * FROM batteries");
    //res.status(200).json(result);
    res.send(result);
});

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

// Endpoint to get featured
//
router.get('/featured', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');

    res.status(200).json(featured);
});

// Endpoint to get an individual featured by ID
//
router.get('/featured/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    let id = req.params.id;
    let result = featured.find((item) => item.id == id);

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
module.exports = app;
module.exports.handler = serverless(app);
