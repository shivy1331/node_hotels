const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

router.post("/", async (req, res) => {
    try {
      const data = req.body; // Assuming the request body contains the person data
  
      // Create a new Person document using the Mongoose model
      const newItem = new MenuItem(data);
  
      // Save the new person to the database
      const response = await newItem.save();
      console.log("Data saved");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  router.get("/", async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log("Data fetched");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  module.exports = router;
