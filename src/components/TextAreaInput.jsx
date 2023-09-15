function TextAreaInput({ value, onChange, placeholder }) {
  return (
    <textarea
      style={{
        resize: "vertical",
      }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

export default TextAreaInput;
