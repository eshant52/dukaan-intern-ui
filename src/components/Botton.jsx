// eslint-disable-next-line react/prop-types
export default function Button({ icon, children, className }) {
  return (
    <button className={`flex w-[200px] items-center rounded p-2 px-4 text-sm hover:bg-[#363C51] ${className}`}>
      <span className="size-6 flex justify-center items-center">{icon}</span>
      <span className="px-3">{children}</span>
    </button>
  );
}
