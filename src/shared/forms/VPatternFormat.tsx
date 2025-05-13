import React, { useEffect, useState } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { PatternFormatProps, PatternFormat } from "react-number-format";
import { useField } from "@unform/core";

type TVTextFieldProps = Omit<PatternFormatProps, "value"> &
  Omit<TextFieldProps, "value"> & {
    name: string;

    onValueChange?: (value: string) => void;
  };

export const VPatternFormat: React.FC<TVTextFieldProps> = ({
  name,
  onValueChange,
  ...rest
}) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [value, setValue] = useState<string>(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, value) => setValue(value),
    });
  }, [fieldName, value, registerField]);

  const handleChange = (value: string) => {
    setValue(value);
    onValueChange && onValueChange(value);
  };

  return (
    <PatternFormat
      {...(rest as any)}
      customInput={TextField}
      value={value}
      error={!!error}
      helperText={error}
      onValueChange={({ value }) => handleChange(value)}
    />
  );
};
