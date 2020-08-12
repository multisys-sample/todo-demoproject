import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function Input({ onAdd }) {
  const [input, setInput] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setInput("");
      onAdd(input);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <TextField
      placeholder="Enter Task"
      variant="outlined"
      value={input}
      onChange={handleChange}
      onKeyPressCapture={handleEnter}
      fullWidth
    />
  );
}
