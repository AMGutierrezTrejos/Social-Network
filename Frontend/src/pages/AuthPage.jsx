import { useRecoilValue } from "recoil";
import LoginCard from "../components/LoginCard";
import authScreenAtom from "../atoms/authAtom";
import SignupCard from "../components/SignupCard";


const AuthPage = () => {

    const authScreenState = useRecoilValue(authScreenAtom); 
    // eso funciona como useState, pero en recoil que fue creado por META (facebook)
    
  return (
    <>
      {authScreenState === "login" ? <LoginCard /> : <SignupCard></SignupCard>}
    </>
  );
};

export default AuthPage;
