const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // It store the data in req.body

// const Person = require("./models/Person");
// const MenuItem = require("./models/MenuItem");

app.get("/", function (req, res) {
  res.send("Welcome to my hotel.....");
});

// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body; // Assuming the request body contains the person data

//     // Create a new Person document using the Mongoose model
//     const newPerson = new Person(data);

//     // Save the new person to the database
//     const response = await newPerson.save();
//     console.log("Data saved");
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // GET method to get the person
// app.get("/person", async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log("Data fetched");
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// For items
// app.post("/items", async (req, res) => {
//   try {
//     const data = req.body; // Assuming the request body contains the person data

//     // Create a new Person document using the Mongoose model
//     const newItem = new MenuItem(data);

//     // Save the new person to the database
//     const response = await newItem.save();
//     console.log("Data saved");
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get("/items", async (req, res) => {
//   try {
//     const data = await MenuItem.find();
//     console.log("Data fetched");
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get("/person/:workType", async (req, res) => {
//   const workType = req.params.workType; // Extract the work type from the URL parameter
//   try {
//     if (workType == "chef" || workType == "manager" || workType == "waiter") {
//       const response = await Person.find({ work: workType });
//       console.log('response fetched');
//       res.status(200).json(response);
//     } else {
//       res.status(404).json({ error: "Invalid work type" });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// Import the router files
const personRoutes = require('./routes/personRoutes');
const itemRoutes = require('./routes/itemRoutes');

// Use the router files
app.use('/person', personRoutes);
app.use('/items', itemRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
