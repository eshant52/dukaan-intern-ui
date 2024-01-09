export default function TextButton({icon, children, className}) {
  return (
    <button className={`py-1 px-2 text-secondary text-sm rounded-md ${className}`}>
      <span>
        {icon}
      </span>
      <span>
        {children}
      </span>
    </button>
  );
}