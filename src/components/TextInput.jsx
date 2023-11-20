import React from "react";

const TextInput = React.forwardRef(
  ({ value, onChange, placeholder, keyDown, required }, ref) => (
    <input
      ref={ref}
      required={required}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          keyDown();
        }
      }}
    />
  )
);

export default TextInput;
