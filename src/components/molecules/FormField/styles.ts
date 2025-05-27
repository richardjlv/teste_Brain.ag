import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  padding: 8px 12px;
  border: 1px solid ${({ hasError }) => (hasError ? "#dc3545" : "#ced4da")};
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${({ hasError }) => (hasError ? "#dc3545" : "#007bff")};
    box-shadow: 0 0 0 2px
      ${({ hasError }) =>
        hasError ? "rgba(220, 53, 69, 0.25)" : "rgba(0, 123, 255, 0.25)"};
  }
`;

export const Error = styled.span`
  font-size: 12px;
  color: #dc3545;
`;
