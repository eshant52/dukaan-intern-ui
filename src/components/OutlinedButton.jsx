export default function OutlinedButton({
  children,
  icon,
  iconPosition,
  className,
}) {
  return (
    <button
      className={`flex justify-center items-center text-secondary rounded-md border font-light ${className}`}
    >
      {iconPosition === "left" && <span className="">{icon}</span>}
      <span>{children}</span>
      {iconPosition === "right" && <span className="">{icon}</span>}
    </button>
  );
}
