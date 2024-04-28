import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");

    req.user = user;

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error in protectRoute: ", error.message);
  }
};

export default protectRoute;


// Este codigo se usa para cuando un usuario sin registrarse vaya a utilizar la funcion de follow o unfollow de otro usuario
// no lo pueda ejecutar porque no tiene un token valido antes de ejecutarse la accion.
// Este verifica ese token. 
// la funcion next es el que estara en la mitad de los dos para verificar esa accion y que no se rompa la app.
