import { Container } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import LogoutButton from "./components/LogoutButton";

function App() {
  const user = useRecoilValue(userAtom);

  return (
    <Container maxW="620px">
      <Header />
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to="/auth" />} // si el usuario esta logeado, redirige a la página de inicio, de lo contrario, redirige a la página de autenticación
        />
        <Route
          path="/auth"
          element={!user ? <AuthPage /> : <Navigate to="/" />} // si el usuario no esta logeado, redirige a la página de autenticación, de lo contrario, redirige a la página de inicio
        />

        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pid" element={<PostPage />} />
      </Routes>

      {user && <LogoutButton />}
    </Container>
  );
}

export default App;
