// eslint-disable-next-line react/prop-types
export default function Button({ children, className }) {
  return (
    <button className={`flex w-[200px] items-center rounded p-2 px-4 text-sm hover:bg-[#363C51] ${className}`}>
      <span className="bg-slate-100 p-1"></span>
      <span className="px-3">{children}</span>
    </button>
  );
}
