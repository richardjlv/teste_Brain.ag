import React from "react";
import { CardContainer, CardContent, CardFooter, CardHeader } from "./styles";

interface CardProps {
  children: React.ReactNode;
  padding?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "default" | "outlined";
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  padding,
  header,
  footer,
  variant = "default",
  onClick,
}) => {
  return (
    <CardContainer padding={padding} variant={variant} onClick={onClick}>
      {header && <CardHeader>{header}</CardHeader>}
      <CardContent hasFooter={!!footer}>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
};

export default Card;
