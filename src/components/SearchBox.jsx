export default function SerachBox({}) {
  return (
    <label className="relative block">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-3.5">
        <div className="size-5 bg-slate-500"></div>
      </span>
      <input
        className="placeholder:text-md block w-[400px] rounded-md bg-[#F2F2F2] p-2.5 pl-11 placeholder:font-light placeholder:text-[#808080] focus:outline-none"
        type="search"
        name="search"
        placeholder="Search features, tutorials, etc."
      />
    </label>
  );
}
