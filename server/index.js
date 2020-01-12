const express = require('express');
const server = express();
//const Joi = require('joi');
const cors = require('cors');
const body_parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

server.use(express.json());
server.use(cors());
server.use(body_parser.json());

// const items = [
//   {id: 1, foodID: 'banana', expiryDate: 10},
//   {id: 2, foodID: 'apple', expiryDate: 20},
//   {id: 3, foodID: 'milk', expiryDate: 5}
// ];

// << db setup >>
const db = require("./db.js");
const dbName = "data";
const collectionName = "movies";

// << db init >>
db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
    // get all items
    dbCollection.find().toArray(function(err, result) {
        if (err) throw err;
          console.log(result);
    });

    // << db CRUD routes >>
    server.post("/api/items", (request, response) => {
       const item = request.body;
       dbCollection.insertOne(item, (error, result) => { // callback of insertOne
          if (error) throw error;
          // return updated list
          dbCollection.find().toArray((_error, _result) => { // callback of find
             if (_error) throw _error;
             response.json(_result);
          });
       });
     });

    server.get("/api/items/:id", (request, response) => {
       const itemId = request.params.id;

       dbCollection.findOne({ id: itemId }, (error, result) => {
          if (error) throw error;
          // return item
          response.json(result);
       });
    });

    server.get("/api/items", (request, response) => {
       // return updated list
       dbCollection.find().toArray((error, result) => {
          if (error) throw error;
          response.json(result);
       });
    });

    server.put("/api/items/:id", (request, response) => {
       const itemId = request.params.id;
       const item = request.body;
       console.log("Editing item: ", itemId, " to be ", item);

       dbCollection.updateOne({ id: itemId }, { $set: item }, (error, result) => {
          if (error) throw error;
          // send back entire updated list, to make sure frontend data is up-to-date
          dbCollection.find().toArray(function (_error, _result) {
             if (_error) throw _error;
             response.json(_result);
          });
       });
    });

    server.delete("/api/items/:id", (request, response) => {
       const itemId = request.params.id;
       console.log("Delete item with id: ", itemId);

       dbCollection.deleteOne({ id: itemId }, function (error, result) {
          if (error) throw error;
          // send back entire updated list after successful request
          dbCollection.find().toArray(function (_error, _result) {
             if (_error) throw _error;
             response.json(_result);
          });
       });
    });

}, function(err) { // failureCallback
    throw (err);
});
/*
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
*/
const port = process.env.PORT || 3001;

server.listen(port, () => {console.log(`Listening on port ${port}...`)});



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
