import React from "react";

interface TestInputProps {
  labels: { label: string; id: number }[];
  title: string;
  inputName: string;
}

const TestInput = ({ labels, title, inputName }: TestInputProps) => {
  return (
    <div>
      <form className="flex flex-col gap-2 border border-orange-400 p-4">
        <h2 className="text-2xl font-bold">{title}</h2>

        {labels.map((item) => (
          <div key={item.id}>
            <div className="flex gap-1">
              <input type="radio" name={inputName} id={item.label} />
              <label htmlFor={item.label}>{item.label}</label>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default TestInput;
