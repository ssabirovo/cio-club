import "./assets/base.scss";
import { Route, Routes } from "react-router-dom";
import { Context } from "./context";
import Main from "./pages/main";
import { useState, Suspense } from "react";
import About from "./pages/About";
import Login from "./pages/admin/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyAccount from "./pages/my-account";
import MyOrders from "./pages/my-orders";
import MyVacancy from "./pages/my-vacancy";
import MyCompanies from "./pages/my-companies/my-companies";
import CompanyInfo from "./pages/company-info/company-info";
import BankInfo from "./pages/bank-info/bank-info";

function App() {
  const [state] = useState({
    aboutPageContent: "Telegram Bot",
    lang: "uz",
  });

  return (
    <Suspense fallback={null}>
      <Context.Provider value={state}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about/:type" element={<About />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/personal" element={<MyAccount />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/vacancy" element={<MyVacancy />} />
          <Route path="/companies" element={<MyCompanies />} />
          <Route path="/company/:company" element={<CompanyInfo />} />
          <Route path="/company/:company/:bank" element={<BankInfo />} />
        </Routes>
      </Context.Provider>{" "}
      <ToastContainer />
    </Suspense>
  );
}

export default App;
