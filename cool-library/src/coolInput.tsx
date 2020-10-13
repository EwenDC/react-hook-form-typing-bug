import React from "react";
import { Controller, ValidationRules } from "react-hook-form";
import { useCoolFormContext } from "./coolForm";

interface CoolInputProps {
  name: string;
  defaultValue?: string;
  validationRules?: ValidationRules;
}

const CoolInput: React.FC<CoolInputProps> = (props) => {
  const { name, defaultValue, validationRules } = props;
  const { disabled } = useCoolFormContext();

  return (
    <Controller
      name={name}
      as={<input />}
      defaultValue={defaultValue || ""}
      rules={validationRules}
      id={name}
      disabled={disabled}
    />
  );
};

export default CoolInput;
