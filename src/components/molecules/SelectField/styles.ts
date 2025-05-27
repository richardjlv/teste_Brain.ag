import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
  font-weight: 500;
`;

export const SelectWrapper = styled.div<{ hasError?: boolean }>`
  position: relative;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #666;
    pointer-events: none;
  }
`;

export const StyledSelect = styled.select<{ hasError?: boolean }>`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${({ hasError }) => (hasError ? "#dc3545" : "#ccc")};
  border-radius: 4px;
  background-color: white;
  font-size: 14px;
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ hasError }) => (hasError ? "#dc3545" : "#007bff")};
    box-shadow: 0 0 0 2px
      ${({ hasError }) =>
        hasError ? "rgba(220, 53, 69, 0.25)" : "rgba(0, 123, 255, 0.25)"};
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

export const Error = styled.span`
  font-size: 12px;
  color: #dc3545;
`;
