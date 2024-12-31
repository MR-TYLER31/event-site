import { UseFormRegister } from "react-hook-form";

interface FormValues {
  title: string;
  company: string;
  location: string;
  salary: string;
  status: string;
  category: string;
  applied_date: string;
  link: string;
}

interface InputFieldProps {
  label: string;
  name: keyof FormValues;
  type?: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<FormValues>;
}

function InputField({
  label,
  name,
  type = "text",
  placeholder = "",
  required = false,
  register,
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        {...register(name, { required })}
        type={type}
        placeholder={placeholder}
        className="w-full border rounded p-2"
      />
    </div>
  );
}

export default InputField;
