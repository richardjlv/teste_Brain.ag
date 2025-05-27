import React from "react";
import { Container, Content } from "./styles";
import { Outlet } from "react-router";
import Sidebar from "../../organisms/Sidebar";

const DashboardTemplate = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default DashboardTemplate;
