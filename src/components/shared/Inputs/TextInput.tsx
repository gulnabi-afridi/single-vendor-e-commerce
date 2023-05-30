import React from "react";
import TextField from "@mui/material/TextField";

interface Props {
  label?: string;
  placeholder?: string;
  Name?: string;
  state: string|number;
  SetState: any;
  IsCompulsory?: boolean;
  Type: string;
  Multiline?: boolean;
  Rows?: number;
}

const TextInput: React.FC<Props> = ({
  label,
  placeholder,
  state,
  SetState,
  IsCompulsory,
  Name,
  Type,
  Multiline,
  Rows,

}: Props) => {
  return (
    <TextField
      sx={{
        width: '100%',
        fontFamily: "Inter",
        fontSize: "14px",
        "& label.Mui-focused": {
          color: "#23232C",
        },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "#23232C",
          },
        },
        // '& .MuiInputBase-root': {
        //   height: '46px', // Decrease the height to your desired value
        // },
      }}
      required={IsCompulsory}
      placeholder={placeholder}
      type={Type}
      name={Name}
      label={label}
      value={state}
      onChange={SetState}
      multiline={Multiline}
      rows={Rows}
    />
  );
};

export default TextInput;
