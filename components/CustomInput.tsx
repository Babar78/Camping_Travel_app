import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { COUNTRIES } from "@/constants";

interface InputProps {
  id: string;
  label?: string;
  inputFieldType: string;
  type?: string;
  placeholder?: string;
  variant: "filled" | "outlined" | "standard";
  icon?: string;
  value?: string;
  endormentPosition?: "start" | "end";
  backgroundColor?: string;
  onUpdate: (e: string) => void;
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
  onUpdate,
  required,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // State management of Background Color of input fields according to screen width

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {inputFieldType === "password" && (
        <FormControl sx={{ width: "100%" }} variant={variant}>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <FilledInput
            id={id}
            value={value}
            onChange={(e) => onUpdate(e.target.value)}
            type={showPassword ? "text" : "password"}
            style={{
              // apply background property if screen width is less than 1024px
              backgroundColor: windowWidth < 1024 ? backgroundColor : "",
            }}
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
        <FormControl sx={{ width: "100%" }} variant={variant}>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <FilledInput
            id={id}
            value={value}
            onChange={(e) => onUpdate(e.target.value)}
            type={type}
            style={{
              // apply background property if screen width is less than 1024px
              backgroundColor: windowWidth < 1024 ? backgroundColor : undefined,
            }}
            required={required}
          />
        </FormControl>
      )}

      {inputFieldType === "countries-select" && (
        <Autocomplete
          id={id}
          sx={{ width: "100%" }}
          options={COUNTRIES}
          autoHighlight
          onChange={(e, selectedOption) => {
            onUpdate(selectedOption?.label!);
          }}
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
              key={option.id + "box"}
            >
              <img
                key={option.id + "flag"}
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=""
              />
              {option.label} ({option.code}) +{option.phone}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant={variant}
              className="rounded-t-md"
              style={{
                // apply background property if screen width is less than 1024px
                backgroundColor:
                  windowWidth < 1024 ? backgroundColor : undefined,
              }}
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-country", // disable autocomplete and autofill
              }}
            />
          )}
        />
      )}
    </>
  );
};

export default CustomInput;
