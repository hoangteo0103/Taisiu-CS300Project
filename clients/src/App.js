import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import WaitRoom from "./pages/WaitRoom";

function App() {
  const [roomID, setRoomID] = useState("");
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />
        <Route path="/waitroom" element={<WaitRoom setAuth={setAuth} roomID = {roomID}/>} />
        <Route
          path="/"
          element={
            auth ? (
              <Home setAuth={setAuth} setRoomID = {setRoomID}/>
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;