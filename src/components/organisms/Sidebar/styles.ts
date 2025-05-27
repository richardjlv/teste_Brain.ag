import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li<{ active?: boolean }>`
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 8px;
  background-color: ${({ active }) => (active ? "#4CAF50" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ active }) => (active ? "#45a049" : "#f5f5f5")};
  }

  span {
    font-size: 14px;
    font-weight: 500;
  }
`;
