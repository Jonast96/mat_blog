import React from "react";

const DropdownSelect = ({ options, selectedValue, onChange }) => {
  return (
    <select value={selectedValue} onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownSelect;
