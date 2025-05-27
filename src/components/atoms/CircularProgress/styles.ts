import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div<{ size: number; color: string }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${({ color }) => color};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
