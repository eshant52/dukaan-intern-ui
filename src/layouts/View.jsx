import TextButton from "@components/TextButton";
import Card from "@components/Card";
import SerachBox from "@components/SearchBox";
import SectionCard from "@components/SectionCard";
import ViewTable from "@components/ViewTable";
import DropDownButton from "@components/DropDownButton";
import search1Img from "@assets/search1.png";
import head1Img from "@assets/head1.png";
import head2Img from "@assets/head2.png";

export default function View() {
  const data = [];

  for (let i = 0; i < 20; i++) {
    data.push({
      orderId: "281209",
      orderDate: "7 july, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    });
  }

  const headingData = [
    {
      field: "orderId",
      name: "Order ID",
      position: "left",
    },
    {
      field: "orderDate",
      name: "Order date",
      position: "center",
    },
    {
      field: "orderAmount",
      name: "Order amount",
      position: "right",
    },
    {
      field: "transactionFees",
      name: "Transaction fees",
      position: "right",
    },
  ];

  return (
    <div className="divide-y divide-[#E5E5E5]">
      <header className="flex items-center justify-between bg-white px-9 py-3">
        <div className="flex items-center space-x-5">
          <span className="text-primary font-light">Payments</span>
          <TextButton className="text-secondary text-[0.8rem] font-light">
            ? How it works
          </TextButton>
        </div>
        <div className="flex justify-center self-center">
          <SerachBox
            icon={<img src={search1Img} />}
            className="w-[400px] bg-[#F2F2F2] placeholder:text-[#808080]"
            placeholder="Search features, tutorials, etc."
          />
        </div>
        <div className="flex items-center space-x-3 pl-20">
          <span className=" size-11 rounded-full p-2 bg-[#E6E6E6]">
            <img src={head1Img} />
          </span>
          <span className=" size-11 rounded-full p-2 bg-[#E6E6E6]">
            <img src={head2Img} />
          </span>
        </div>
      </header>
      <div className="flex h-full w-full flex-col space-y-9 bg-[#FAFAFA] p-9">
        <SectionCard
          title="Overview"
          action={<DropDownButton>Last Month</DropDownButton>}
        >
          <div className="flex justify-between space-x-5">
            <Card title="Online orders" body="231" />
            <Card title="Amount received" body="₹23,92,312.19" />
          </div>
        </SectionCard>
        <SectionCard title="Transactions | This Month">
          <ViewTable colHeadData={headingData} rowData={data} />
        </SectionCard>
      </div>
    </div>
  );
}
