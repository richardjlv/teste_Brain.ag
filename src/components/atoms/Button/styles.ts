import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #3f9642ff;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
