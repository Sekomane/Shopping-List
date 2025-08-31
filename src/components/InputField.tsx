interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const InputField = ({ type, placeholder, value, onChange }: InputFieldProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default InputField;
