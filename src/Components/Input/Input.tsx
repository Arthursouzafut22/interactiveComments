import React from "react";

interface InputProps {
  type: string;
  id: string;
  name: string;
  value: string;
}

const Input: React.FC<InputProps> = ({ type, id, name, value }: InputProps) => {
  return <input type={type} name={name} id={id} value={value} />;
};

export default Input;
