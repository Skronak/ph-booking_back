"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const functions = require("firebase-function");
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const app = (0, express_1.default)();
const cors = require("cors");
app.use(cors());
const port = 3000;
app.get('/', (req, res) => {
    let orderFromDatabase = (0, database_1.getOrderFromDatabase)();
    res.send('welcome to the booking website' + orderFromDatabase);
});
app.listen(port, () => {
    console.log(process.env.apiKey);
    return console.log(`Express is listening at http://localhost:${port}`);
});
//exports.app = functions.https.onRequest(app);
//# sourceMappingURL=app.js.map