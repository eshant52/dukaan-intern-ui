export default function textButton({icon, children, className}) {
  return (
    <button className={`${className}`}>
      <span>
        {icon}
      </span>
      <span>
        {children}
      </span>
    </button>
  );
}