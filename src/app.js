const express = require('express');
const serverless = require('serverless-http');
const mysql = require("mysql2");


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

// Endpoint to get all batteries
router.get("/batteries", async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://robibuilder.github.io');
    let result = await db.executeQuery("SELECT * FROM batteries");
    //res.status(200).json(result);
    res.send(result);
});

// Endpoint to get an individual battery by ID
router.get("/batteries/:id", async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://robibuilder.github.io');
    try {
        let result = await db.executeQuery("SELECT * FROM batteries WHERE id = ?", [req.params.id]);
        res.send(result);
    } catch (e) {
        // console.log(req)
        console.log(e)
        console.log(req.body)
        res.status(500).json({error: e})
    }
});

// Endpoint to get all tools
//
router.get("/tools", async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://robibuilder.github.io');
    try {
        let result = await db.executeQuery("SELECT * FROM tools");
        res.send(result);
    } catch (e) {
        // console.log(req)
        console.log(e)
        console.log(req.body)
        res.status(500).json({error: e})
    }
});

// Endpoint to get an individual tool by ID
//
router.get("/tools/:id", async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://robibuilder.github.io');
    try {
        let result = await db.executeQuery("SELECT * FROM tools WHERE id = ?", [req.params.id]);
        res.send(result);
    } catch (e) {
        // console.log(req)
        console.log(e)
        console.log(req.body)
        res.status(500).json({error: e})
    }
});

// Endpoint to get featured
//
router.get("/featured", async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://robibuilder.github.io');
    try {
        let result = await db.executeQuery("SELECT * FROM featured");
        res.send(result);
    } catch (e) {
        // console.log(req)
        console.log(e)
        console.log(req.body)
        res.status(500).json({error: e})
    }
});

// Endpoint to get an individual featured by ID
//
router.get("/featured/:id", async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://robibuilder.github.io');
    try {
        let result = await db.executeQuery("SELECT * FROM featured WHERE product_id = ?", [req.params.id]);
        res.send(result);
    } catch (e) {
        // console.log(req)
        console.log(e)
        console.log(req.body)
        res.status(500).json({error: e})
    }
});


app.use('/.netlify/functions/app', router);
module.exports = app;
module.exports.handler = serverless(app);
