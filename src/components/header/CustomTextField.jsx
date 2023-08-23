import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function CustomTextField({
  name,
  label,
  required,
  type,
  textErroe,
  erroStatus,
}) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            error={erroStatus}
            helperText={textErroe}
            type={type}
            {...field}
            label={label}
            fullWidth
            required={required}
            variant="outlined"
            id="outlined-required"
            sx={{
              "& input": {
                backgroundColor: "#FFF", // Change input background color
                color: "#82888E", // Change input text color
                borderRadius: "8px",
                padding: "11.5px 14px",
              },
              "& label": {
                // transform: "translate(0, 12px) scale(1)", // Adjust the translation value as needed
                color: "#82888E", // Change label color
              },
              " & ::before": {
                display: "none",
              },
              " & ::after": {
                display: "none",
              },
              borderRadius: "8px",

              border: "1px solid #ced4da",
            }}
            InputLabelProps={{
              style: {
                // transform: "translate(14px, 14px) scale(1)", // Adjust the translation value as needed
              },
            }}
          />
        )}
      />
    </Grid>
  );
}

export default CustomTextField;
