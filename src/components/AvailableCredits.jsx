import walletImg from "@assets/wallet.png";
export default function AvailableCredits() {
  return (
    <div className="flex items-center space-x-3 rounded-md bg-[#363C51] px-3 py-2">
      <div className="flex size-10 items-center justify-center rounded-md bg-[#4A5062] px-1.5 py-0.5">
        <img src={walletImg} alt="" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-light text-[#D7D8DD]">
          Available credits
        </span>
        <span className="text-md">222.10</span>
      </div>
    </div>
  );
}
