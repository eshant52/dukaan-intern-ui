import dropImg from "@assets/drop.png";

export default function NavHeader({dp, name}) {
  return (
    <header className="mb-6 flex items-center space-x-3 p-2">
      <div className="size-11">
        <img className="rounded-md" src={dp} />
      </div>
      <div className="text-md flex grow flex-col justify-between">
        <div className=" truncate text-pretty w-28">{name}</div>
        <div className="text-sm font-light text-[#D2D4D9] underline">
          <a href="#">Visit store</a>
        </div>
      </div>
      <div className="flex size-6 items-center justify-center">
        <img className="" src={dropImg} alt="" />
      </div>
    </header>
  );
}
