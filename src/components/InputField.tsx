interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}

const InputField = ({ type, placeholder, value, onChange }: InputFieldProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="form-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputField;
