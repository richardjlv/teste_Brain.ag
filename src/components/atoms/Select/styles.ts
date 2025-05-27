import styled from "styled-components";

export const SelectContainer = styled.select<{ hasError?: boolean }>`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${({ hasError }) => (hasError ? "#dc3545" : "#ced4da")};
  border-radius: 4px;
  font-size: 14px;
  color: #495057;
  background-color: #fff;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ hasError }) => (hasError ? "#dc3545" : "#80bdff")};
    box-shadow: 0 0 0 0.2rem
      ${({ hasError }) =>
        hasError ? "rgba(220, 53, 69, 0.25)" : "rgba(0, 123, 255, 0.25)"};
  }

  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }
`;
