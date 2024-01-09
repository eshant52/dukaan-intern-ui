export default function OutlinedButton({ children, icon, iconPosition, className}) {
  return (
    <button
      className={`text-secondary rounded-md border  font-light ${className}`}
    >
      {iconPosition === "left" && <span>{icon}</span>}
      {children}
      {iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
}
