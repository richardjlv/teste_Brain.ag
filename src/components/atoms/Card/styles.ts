import styled from "styled-components";

interface CardContainerProps {
  padding?: string;
  variant?: "default" | "outlined";
}

interface CardContentProps {
  hasFooter?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  background-color: ${({ variant }) =>
    variant === "outlined" ? "transparent" : "#fff"};
  border: ${({ variant }) =>
    variant === "outlined" ? "1px solid #e0e0e0" : "none"};
  border-radius: 8px;
  padding: ${({ padding }) => padding || "16px"};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  }
`;

export const CardHeader = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 16px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardContent = styled.div<CardContentProps>`
  margin-bottom: ${({ hasFooter }) => (hasFooter ? "16px" : "0")};
`;

export const CardFooter = styled.div`
  padding-top: 16px;
  border-top: 1px solid #e0e0e0;
`;
