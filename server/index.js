const express = require('express');
const app = express();
const Joi = require('joi');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const items = [
  {id: 1, foodID: 'banana', expiryDate: 10},
  {id: 2, foodID: 'apple', expiryDate: 20},
  {id: 3, foodID: 'milk', expiryDate: 5}
];


app.get('/', (req, res) => {
  res.send('Home!');
});


app.get('/api/items', (req, res) => {
  res.send(items);
});


app.get('/api/items/:id', (req, res) => {
  const item = items.find(c => c.id === parseInt(req.params.id));
  if (!item) res.status(404).send('The item with the given id is not present!');
  else res.send(item);
});


//add entry
app.post('/api/items', (req, res) => {
  const { error } = validateItem(req.body);
  if (error) {
    console.log(error.details[0].message);
    return res.status(400).send(error.details[0].message);
  }

  const item = {
    id: items.length + 1,
    foodID: req.body.foodID,
    expiryDate: req.body.expiryDate
  }
  items.push(item);
  res.send(item);
});


//change entry
app.put('/api/items/:id', (req, res) => {
  const item = items.find(c => c.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('The item with the given id is not present!');

  const { error } = validateItem(req.body);
  if (error) {
    console.log(error.details[0].message);
    return res.status(400).send(error.details[0].message);
  }

  item.foodID = req.body.foodID;
  item.expiryDate = req.body.expiryDate;
  res.send(item);
});


app.delete('/api/items/:id', (req, res) => {
  //look up item
  //return 404 if not found
  const item = items.find(c => c.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('The item with the given id is not present!');

  //delete
  const index = items.indexOf(item);
  items.splice(index, 1);

  res.send(item);
});

function validateItem (body) {
  const schema = {
    foodID: Joi.string().min(2).required(),
    expiryDate: Joi.number().positive().required()
  }
  const result = Joi.validate(body, schema);
  return result;
}

const port = process.env.PORT || 3001;

app.listen(port, () => {console.log(`Listening on port ${port}...`)});



// const Express = require("express");
// const BodyParser = require("body-parser");
// const MongoClient = require("mongodb").MongoClient;
// const ObjectId = require("mongodb").ObjectID;
//
// const CONNECTION_URL = "mongodb+srv://FridgeUser:wbANGRtSWTKFpqYG@fridgecluster-0ptky.mongodb.net/test?retryWrites=true&w=majority";
// const DATABASE_foodID = "FridgeDB";
//
// var app = Express();
//
// app.use(BodyParser.json());
// app.use(BodyParser.urlencoded({ extended: true }));
//
// var database, collection;
//
// app.listen(3001, () => {
//     MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
//         if(error) {
//             throw error;
//         }
//         database = client.db(DATABASE_foodID);
//         collection = database.collection("people");
//         console.log("Connected to `" + DATABASE_foodID + "`!");
//     });
// });
