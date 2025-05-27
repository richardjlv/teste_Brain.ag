import React from "react";
import { Container, Label, SelectWrapper, StyledSelect, Error } from "./styles";

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  value,
  onChange,
  error,
  placeholder,
  disabled,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <SelectWrapper hasError={!!error}>
        <StyledSelect
          value={value}
          onChange={onChange}
          hasError={!!error}
          disabled={disabled}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      </SelectWrapper>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default SelectField;
