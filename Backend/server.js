//para hacer asi las importaciones hay que cambiar el package.json y agregar type: module

import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(5000, () => console.log(`Server started at http://localhost:${PORT}`));