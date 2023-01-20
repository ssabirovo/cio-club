import "./assets/base.scss";
import { Route, Routes } from "react-router-dom";
import { Context } from "./context";
import Main from "./pages/main";
import { useState, Suspense } from "react";
import About from "./pages/About";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyAccount from "./pages/my-account";
import MyOrders from "./pages/my-orders";
import AllEvent from "./pages/all-event";
import AboutEvent from "./pages/about-event";

function App() {
  const [state] = useState({
    aboutPageContent: "Telegram Bot",
    lang: "uz",
  });

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/personal" element={<MyAccount />} />
        <Route path="/events" element={<AllEvent />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/about-event/:type" element={<AboutEvent />} />
      </Routes>
      <ToastContainer />
    </Suspense>
  );
}

export default App;
