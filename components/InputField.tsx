import { HTMLInputTypeAttribute } from "react";

type InputFieldProps = {
  name: string
  type: HTMLInputTypeAttribute,
  placeholder: string
}

//styled reusable component for any input field
export default function InputField({ name, type, placeholder }: InputFieldProps) {

  return (
    //name attribute is needed to grab values from inputs
    <input
      name={name}
      type={type}
      required
      className="appearance-none relative block w-full p-2 mb-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-accent_1_hover 
      focus:border-accent_1 sm:text-sm"
      placeholder={placeholder}/>
  );
}
