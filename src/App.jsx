import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserRegistration from "./pages/UserRegistration/UserRegistration";
import SetupOrganisation from "./pages/SetupOrganisation/SetupOrganisation";
import ChatbotIntegrationTesting from "./pages/ChatbotIntegrationTesting/ChatbotIntegrationTesting";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserRegistration />} />
      <Route path="/setup" element={<SetupOrganisation />} />
      <Route path="/bot" element={<ChatbotIntegrationTesting />} />
    </Routes>
  );
}

export default App;
