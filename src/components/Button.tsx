interface ButtonProps {
  children: string;
  className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`bg-roxo-escuro w-full h-full px-6 py-2 text-white rounded-4xl cursor-pointer hover:bg-roxo active:opacity-85 uppercase ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
