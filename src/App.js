import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";

import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  //false 로그인 안 됨 true 로그인 확인
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("aaaa", authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar authenticate={authenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
