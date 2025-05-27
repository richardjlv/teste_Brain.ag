import React from "react";
import { Container, Spinner } from "./styles";

interface CircularProgressProps {
  size?: number;
  color?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 40,
  color = "#4CAF50",
}) => {
  return (
    <Container role="progressbar">
      <Spinner size={size} color={color} />
    </Container>
  );
};

export default CircularProgress;
