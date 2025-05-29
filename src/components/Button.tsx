interface ButtonProps {
  children: string;
  className?: string;
  bg?: string
  hover?: string
}

const Button = ({ children, className, bg = "bg-roxo-escuro", hover = "hover:bg-roxo" }: ButtonProps) => {
  return (
    <button
      className={`${bg} w-full h-full px-6 py-2 text-white rounded-4xl cursor-pointer ${hover} active:opacity-85 uppercase ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
