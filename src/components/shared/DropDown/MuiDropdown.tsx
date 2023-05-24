import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

interface props {
  value: string;
  InputChange: (e: any) => void;
  DropdownItem: Array<object>;
  Size?: "small" | "medium";
  placeholder?: string;
  defaultValue?: string;
}

function MuiDropdown({
  value,
  InputChange,
  DropdownItem,
  Size = "small",
  placeholder,
  defaultValue,
}: props) {
  return (
    <FormControl
      sx={{
        "& label.Mui-focused": {
          color: "#23232C",
        },
        width: "100%",
      }}
      size={Size}
    >
      <InputLabel
        sx={{
          fontSize: "12px",
          fontFamily: "Inter",
        }}
        id="select-category"
      >
        {placeholder}
      </InputLabel>
      <Select
        sx={{
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#23232C",
          },
          fontSize: "14px",
          fontFamily: "Inter",
        }}
        value={value}
        defaultValue={defaultValue}
        label={placeholder}
        onChange={InputChange}
      >
        {DropdownItem?.map((item: any, index: number) => {
          return (
            <MenuItem
              key={index}
              sx={{
                fontSize: "14px",
                fontFamily: "Inter",
              }}
              value={item.value}
            >
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default MuiDropdown;
