import React from "react";
import { Routes as Router, Route, redirect } from "react-router";
import Dashboard from "./pages/Dashboard";
// import FarmManagement from "./pages/FarmManagement";
import ProducerRegistration from "./pages/ProducerRegistration";
import ProducerEdit from "./pages/ProducerEdit";
import DashboardTemplate from "./components/templates/DashboardTemplate";
import Producers from "./pages/Producers";

const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="/" element={<DashboardTemplate />}>
        <Route index element={<Dashboard />} />
        {/* <Route path="/farm-management" element={<FarmManagement />} /> */}
        <Route path="producers">
          <Route index element={<Producers />} />
          <Route path="register" element={<ProducerRegistration />} />
          <Route path=":id" element={<ProducerEdit />} />
        </Route>
      </Route>
      <Route path="*" action={() => redirect("/")} />
    </Router>
  );
};

export default Routes;
