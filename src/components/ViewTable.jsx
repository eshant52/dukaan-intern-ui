/* eslint-disable react/prop-types */
import OutlinedButton from "./OutlinedButton";
import SerachBox from "./SearchBox";
import TextButton from "./TextBUtton";
import search2Img from "@assets/search2.png"

export default function ViewTable({ colHeadData, rowData }) {
  const th = colHeadData.map((data, i) => (
    <th
      key={i}
      id={i}
      title={data.name}
      className={`text-secondary bg-[#F2F2F2] p-3 text-${data.position}  font-normal first:rounded-l-md last:rounded-r-md`}
    >
      {data.name}
    </th>
  ));

  const rowBody = rowData.map((data, i) => {
    return (
      <tr key={i}>
        {Object.entries(data).map(([key, value], i) => (
          <td
            key={i}
            className={`text-primary first:text-highlight font-light first:font-normal p-3 text-${colHeadData[i].position}`}
          >
            {
              (i==0) ? "#"+value : value
            }
          </td>
        ))}
      </tr>
    );
  });

  return (
    <div className="flex w-full flex-col space-y-3 rounded-md bg-white p-3">
      <header className="flex justify-between">
        <SerachBox
        icon={<img src={search2Img}/>}
          className="w-[250px] border border-[#D9D9D9] bg-white placeholder:text-[#999999]"
          placeholder="Search by order ID..."
        />
        <div className="space-x-3">
          <OutlinedButton className="px-3 py-2 placeholder:text-[#999999]">
            Sort
          </OutlinedButton>
          <OutlinedButton>Download</OutlinedButton>
        </div>
      </header>
      <div className="sortable w-full">
        <table className="w-full text-sm">
          <thead>
            <tr>{th}</tr>
          </thead>
          <tbody className="divide-y">{rowBody}</tbody>
        </table>
      </div>
      <footer className="flex items-center justify-center space-x-6">
        <OutlinedButton className="px-2 py-1 text-sm font-normal">
          Previous
        </OutlinedButton>
        <div className="space-x-2">
          <TextButton className="">1</TextButton>
          <span className="px-3 py-2">...</span>
          <TextButton className="bg-highlight text-white">10</TextButton>
          <TextButton>11</TextButton>
          <TextButton>12</TextButton>
          <TextButton>13</TextButton>
          <TextButton>14</TextButton>
          <TextButton>15</TextButton>
          <TextButton>16</TextButton>
          <TextButton>17</TextButton>
          <TextButton>18</TextButton>
        </div>
        <OutlinedButton className="px-2 py-1 text-sm font-normal">
          Next
        </OutlinedButton>
      </footer>
    </div>
  );
}
