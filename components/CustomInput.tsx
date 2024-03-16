import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface InputProps {
  id: string;
  label?: string;
  inputFieldType: string;
  type?: string;
  placeholder?: string;
  variant: "filled" | "outlined" | "standard";
  icon?: string;
  value: string;
  endormentPosition?: "start" | "end";
  backgroundColor?: string;
  color?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const CustomInput = ({
  id,
  label,
  inputFieldType,
  type,
  placeholder,
  variant,
  icon,
  value,
  endormentPosition,
  backgroundColor,
  color,
  onChange,
  required,
}: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      {inputFieldType === "password" && (
        <FormControl sx={{ width: "100%" }} variant={variant}>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <FilledInput
            id={id}
            value={value}
            onChange={onChange}
            type={showPassword ? "text" : "password"}
            required={required}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      )}

      {/* Text Field */}

      {inputFieldType === "text-field" && (
        <TextField
          id={id}
          label={label}
          type={type}
          placeholder={placeholder}
          variant={variant}
          value={value}
          onChange={onChange}
          required={required}
          fullWidth
        />
      )}
    </>
  );
};

export default CustomInput;
