import Button from "@components/Botton";

export default function Navigation() {
  return (
    <div className="flex h-full flex-col bg-[#20263E] p-2 text-cyan-50">
      <header className="mb-6 flex items-center p-2">
        <div className="size-10 rounded-md bg-fuchsia-50">
          <img src="" />
        </div>
        <div className="flex grow flex-col justify-between px-3">
          <div>Nishyan</div>
          <div className="text-sm font-light text-gray-300 underline">
            <a href="#">Visit store</a>
          </div>
        </div>
        <div>
          <span>*</span>
        </div>
      </header>
      <nav className="flex flex-col">
        <Button>Home</Button>
        <Button>Orders</Button>
        <Button>Products</Button>
        <Button>Delivery</Button>
        <Button>Marketing</Button>
        <Button>Analytics</Button>
        <Button>Payments</Button>
        <Button>Tools</Button>
        <Button>Discounts</Button>
        <Button>Audience</Button>
        <Button>Appearance</Button>
        <Button>Plugins</Button>
      </nav>
    </div>
  );
}
