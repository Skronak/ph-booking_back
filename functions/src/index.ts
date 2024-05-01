import * as functions from "firebase-functions";
import * as express from "express";
import {addEntry, getAllEntries, updateEntry, deleteEntry} from "./database";
import cors from "cors";

const app = express();

const port = 3000;
const allowedOrigins = ["http://localhost:3000"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.use(express.json());

app.post("/there", (req, res) => res.status(200).send("Hey there!"));
app.post("/entries", addEntry);
app.get("/entries", getAllEntries);
app.patch("/entries/:entryId", updateEntry);
app.delete("/entries/:entryId", deleteEntry);
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

exports.app = functions.https.onRequest(app);
