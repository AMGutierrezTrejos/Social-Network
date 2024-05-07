import { Box, Container } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import CreatePost from "./components/CreatePost";
import ChatPage from "./pages/ChatPage";

function App() {
  const user = useRecoilValue(userAtom);

  return (
    <Box position={"relative"} w="full">  
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

        <Route
          path="/update"
          element={user ? <UpdateProfilePage /> : <Navigate to="/auth" />}
        />

        <Route
          path="/:username"
          element={
            user ? (
              <>
                <UserPage /> <CreatePost />
              </>
            ) : (
              <UserPage />
            )
          }
        />
        <Route path="/:username/post/:pid" element={<PostPage />} />
        <Route path="/chat" element={user ?<ChatPage /> : <Navigate to="/auth" />} />
      </Routes>

    </Container>
    </Box>
  );
}

export default App;
