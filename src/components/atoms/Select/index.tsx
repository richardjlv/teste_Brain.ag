import React, { forwardRef } from "react";
import { SelectContainer } from "./styles";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  options: Array<{ value: string; label: string }>;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ error, options, ...props }, ref) => {
    return (
      <SelectContainer ref={ref} hasError={!!error} {...props}>
        <option value="">Selecione uma opção</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectContainer>
    );
  }
);

Select.displayName = "Select";

export default Select;
