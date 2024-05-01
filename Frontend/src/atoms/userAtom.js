import { atom } from "recoil";


const userAtom = atom({
    key: "userAtom", // unique ID (with respect to other atoms/selectors)
    default: JSON.parse(localStorage.getItem("user-threads")), // convierte el string a objeto JavaScript.
});

export default userAtom