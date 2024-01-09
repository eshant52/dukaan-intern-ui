import Button from "@components/Botton";
import pluginImg from "@assets/plugin.png";
import homeImg from "@assets/home.png";
import orderImg from "@assets/order.png";
import productImg from "@assets/product.png";
import deliveryImg from "@assets/delivery.png";
import marketingImg from "@assets/marketing.png";
import analyticImg from "@assets/analytic.png";
import paymentImg from "@assets/payment.png";
import toolImg from "@assets/tool.png";
import discountImg from "@assets/discount.png";
import audienceImg from "@assets/audience.png";
import appearanceImg from "@assets/appearance.png";
import dpImg from "@assets/dp.png";

export default function Navigation() {
  return (
    <div className="flex h-full flex-col bg-[#20263E] p-2 text-cyan-50">
      <header className="mb-6 flex items-center p-2">
        <div className="size-10 rounded-md">
          <img src={dpImg} />
        </div>
        <div className="flex grow flex-col justify-between px-3">
          <div>Nishyan</div>
          <div className="text-sm font-light text-gray-300 underline">
            <a href="#">Visit store</a>
          </div>
        </div>
        <div>
          <span>^</span>
        </div>
      </header>
      <nav className="flex flex-col">
        <Button icon={<img src={homeImg} />}>Home</Button>
        <Button icon={<img src={orderImg} />}>Orders</Button>
        <Button icon={<img src={productImg} />}>Products</Button>
        <Button icon={<img src={deliveryImg} />}>Delivery</Button>
        <Button icon={<img src={marketingImg} />}>Marketing</Button>
        <Button icon={<img src={analyticImg} />}>Analytics</Button>
        <Button icon={<img src={paymentImg} className="bg-[#363C51]" />}>
          Payments
        </Button>
        <Button icon={<img src={toolImg} />}>Tools</Button>
        <Button icon={<img src={discountImg} />}>Discounts</Button>
        <Button icon={<img src={audienceImg} />}>Audience</Button>
        <Button icon={<img src={appearanceImg} />}>Appearance</Button>
        <Button icon={<img src={pluginImg} />}>Plugins</Button>
      </nav>
      <div></div>
    </div>
  );
}
