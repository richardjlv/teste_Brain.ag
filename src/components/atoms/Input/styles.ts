import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
