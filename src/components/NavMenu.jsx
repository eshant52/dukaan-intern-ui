import NavButton from "@components/NavBotton";
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
import { useState } from "react";

export default function NavMenu() {
  const [index, setIndex] = useState(6);
  return (
    <nav className="flex grow flex-col">
      <NavButton
        onClick={() => setIndex(0)}
        isActive={index === 0}
        icon={<img src={homeImg} />}
      >
        Home
      </NavButton>
      <NavButton
        onClick={() => setIndex(1)}
        isActive={index === 1}
        icon={<img src={orderImg} />}
      >
        Orders
      </NavButton>
      <NavButton
        onClick={() => setIndex(2)}
        isActive={index === 2}
        icon={<img src={productImg} />}
      >
        Products
      </NavButton>
      <NavButton
        onClick={() => setIndex(3)}
        isActive={index === 3}
        icon={<img src={deliveryImg} />}
      >
        Delivery
      </NavButton>
      <NavButton
        onClick={() => setIndex(4)}
        isActive={index === 4}
        icon={<img src={marketingImg} />}
      >
        Marketing
      </NavButton>
      <NavButton
        onClick={() => setIndex(5)}
        isActive={index === 5}
        icon={<img src={analyticImg} />}
      >
        Analytics
      </NavButton>
      <NavButton
        onClick={() => setIndex(6)}
        isActive={index === 6}
        icon={<img src={paymentImg} />}
      >
        Payments
      </NavButton>
      <NavButton
        onClick={() => setIndex(7)}
        isActive={index === 7}
        icon={<img src={toolImg} />}
      >
        Tools
      </NavButton>
      <NavButton
        onClick={() => setIndex(8)}
        isActive={index === 8}
        icon={<img src={discountImg} />}
      >
        Discounts
      </NavButton>
      <NavButton
        onClick={() => setIndex(9)}
        isActive={index === 9}
        icon={<img src={audienceImg} />}
      >
        Audience
      </NavButton>
      <NavButton
        onClick={() => setIndex(10)}
        isActive={index === 10}
        icon={<img src={appearanceImg} />}
      >
        Appearance
      </NavButton>
      <NavButton
        onClick={() => setIndex(11)}
        isActive={index === 11}
        icon={<img src={pluginImg} />}
      >
        Plugins
      </NavButton>
    </nav>
  );
}
