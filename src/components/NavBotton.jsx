// eslint-disable-next-line react/prop-types
export default function NavButton({ icon, children, className, isActive, onClick }) {
  return (
    <button
      className={`transition ${isActive && "bg-[#363C51]"} flex w-[220px] items-center rounded p-2 px-4 text-sm text-[#D2D4D9] hover:bg-[#363C51]/50 ${className} `} onClick={onClick}
    >
      <span className="flex size-6 items-center justify-center">{icon}</span>
      <span className="px-3">{children}</span>
    </button>
  );
}
