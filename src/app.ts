//const functions = require("firebase-function");
import express from 'express';
import {getOrderFromDatabase} from "./database";
const app = express();
const cors = require("cors");
app.use(cors());

const port = 3000;

app.get('/', (req, res) => {
  let orderFromDatabase = getOrderFromDatabase();
  res.send('welcome to the booking website' + orderFromDatabase);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

//exports.app = functions.https.onRequest(app);
