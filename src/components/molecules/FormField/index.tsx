import React, { forwardRef } from "react";
import { Container, Label, Input, Error } from "./styles";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <Container>
        <Label>{label}</Label>
        <Input ref={ref} hasError={!!error} {...props} />
        {error && <Error>{error}</Error>}
      </Container>
    );
  }
);

// Assign a display name for debugging purposes
FormField.displayName = "FormField";

export default FormField;
