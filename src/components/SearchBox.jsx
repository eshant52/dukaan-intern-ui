export default function SerachBox({icon, className, placeholder }) {
  return (
    <label className="relative block">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-3.5">
        <div className="size-5 ">
          {icon}
        </div>
      </span>
      <input
        className={`block rounded-md p-2 pl-11 placeholder:text-sm placeholder:font-light focus:outline-none  ${className}`}
        type="search"
        name="search"
        placeholder={placeholder}
      />
    </label>
  );
}
