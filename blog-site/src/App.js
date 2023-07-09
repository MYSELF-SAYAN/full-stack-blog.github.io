
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register/Register";
import { useContext } from "react";
import { Context } from "./Context/Context";

function App() {
  const {user}=useContext(Context);
  return (
    <>
    <NavBar/>
<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={user ? <Home/> : <Login/>} />
      <Route path="/settings" element={user ? <Settings/> : <Register/>} />
      <Route path="/write" element={user ? <Write/> : <Register/>}/>
      <Route path="/register" element={user ? <Home/> : <Register/>}/>
      <Route path="/post/:postId" element={<Single/>}/>
    </Routes>

</>
  );
}

export default App;
