import { atom } from "recoil";

const authScreenAtom = atom({
  key: "authScreenAtom",
  default: "login",
});

export default authScreenAtom;


// El uso de esto es para manejar todos los estados de React en un solo archivo