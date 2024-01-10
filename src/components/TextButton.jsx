export default function TextButton({icon, children, className}) {
  return (
    <button className={`min-w-fit flex justify-center items-center text-sm font-light text-secondary ${className}`}>
      {icon && <span>
        {icon}
      </span>}
      <span>
        {children}
      </span>
    </button>
  );
}