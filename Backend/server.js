//para hacer asi las importaciones hay que cambiar el package.json y agregar type: module, ademas, agregar el start: node server.js

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json()); // Este middleware analiza el cuerpo de las solicitudes entrantes con formato JSON y los convierte en objetos JavaScript accesibles a través de req.body. Es útil cuando estás enviando datos desde un formulario HTML o una solicitud de cliente que está codificada en JSON.
app.use(express.urlencoded({ extended: false })); // Analiza el cuerpo de las solicitudes entrantes con formato URL-encoded y los convierte en objetos JavaScript accesibles a través de req.body.
app.use(cookieParser()); // Analiza las cookies de las solicitudes entrantes y las convierte en objetos JavaScript accesibles a través de req.cookies.

//Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(5000, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
