import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Dashboard from "./Dashboard";
import ClientsDetails from "./pages/ClientsDetails";
import ConversionsDetails from "./pages/ConversionsDetails";
import UsersDetails from "./pages/UsersDetails";

const App: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Router>
      <div style={{ padding: "10px", textAlign: "right" }}>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("ar")}>العربية</button>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clients" element={<ClientsDetails />} />
        <Route path="/conversions" element={<ConversionsDetails />} />
        <Route path="/users" element={<UsersDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
