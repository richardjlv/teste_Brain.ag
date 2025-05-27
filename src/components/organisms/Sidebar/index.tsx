import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Container, MenuItem, MenuList } from "./styles";
import menuRoutes from "../../../constants/menu";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Container>
      <MenuList>
        {menuRoutes.map((route) => (
          <MenuItem
            key={route.path}
            active={location.pathname === route.path}
            onClick={() => handleNavigation(route.path)}
          >
            <span>{route.label}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Container>
  );
};

export default Sidebar;
