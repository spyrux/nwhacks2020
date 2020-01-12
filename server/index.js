const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());

const items = [
  {id: 1, name: 'banana', expiry: 10},
  {id: 2, name: 'apple', expiry: 20},
  {id: 3, name: 'milk', expiry: 5}
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
  if (error) return res.status(400).send(error.details[0].message);

  const item = {
    id: items.length + 1,
    name: req.body.name,
    expiry: req.body.expiry
  }
  items.push(item);
  res.send(item);
});


//change entry
app.put('/api/items/:id', (req, res) => {
  const item = items.find(c => c.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('The item with the given id is not present!');

  const { error } = validateItem(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  item.name = req.body.name;
  item.expiry = req.body.expiry;
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
    name: Joi.string().min(2).required(),
    expiry: Joi.number().positive().required()
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
// const DATABASE_NAME = "FridgeDB";
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
//         database = client.db(DATABASE_NAME);
//         collection = database.collection("people");
//         console.log("Connected to `" + DATABASE_NAME + "`!");
//     });
// });
