import TextButton from "@components/TextButton";
import Card from "@components/Card";
import SerachBox from "@components/SearchBox";
import SectionCard from "@components/SectionCard";
import ViewTable from "@components/ViewTable";

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
            © How it works
          </TextButton>
        </div>
        <div className="flex w-[600px] justify-center self-center">
          <SerachBox />
        </div>
        <div className="flex items-center space-x-3 pl-20">
          <span className=" rounded-full bg-[#E6E6E6] p-5"></span>
          <span className=" rounded-full bg-[#E6E6E6] p-5"></span>
        </div>
      </header>
      <div className="flex h-full w-full flex-col space-y-9 bg-[#FAFAFA] p-9">
        <SectionCard
          title="Overview"
          action={
            <div className="h-10 w-[120px] rounded-sm border bg-white">
              Last Month
            </div>
          }
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
