
import dpImg from "@assets/dp.png";
import AvailableCredits from "@components/AvailableCredits";
import NavHeader from "@components/NavHeader";
import NavMenu from "@components/NavMenu";

export default function Navigation() {
  return (
    <div className="flex h-full flex-col bg-[#20263E] p-2 text-cyan-50">
      <NavHeader dp={dpImg} name="Nishyan"/>
      <NavMenu />
      <div className="p-2">
        <AvailableCredits />
      </div>
    </div>
  );
}
