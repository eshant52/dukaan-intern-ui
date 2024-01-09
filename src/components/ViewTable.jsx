/* eslint-disable react/prop-types */
import OutlinedButton from "./OutlinedButton";
import SerachBox from "./SearchBox";

export default function ViewTable({ colHeadData, rowData }) {
  const th = colHeadData.map((data, i) => (
    <th
      key={i}
      id={i}
      title={data.name}
      className={`text-secondary bg-[#F2F2F2] p-3 text-${data.position} font-normal first:rounded-l-md last:rounded-r-md`}
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
      <div className="flex justify-between">
        <SerachBox />
        <div className="space-x-3">
          <OutlinedButton >Sort</OutlinedButton>
          <OutlinedButton>Download</OutlinedButton>
        </div>
      </div>
      <div className="sortable w-full">
        <table className="w-full table-auto text-sm">
          <thead>
            <tr>{th}</tr>
          </thead>
          <tbody className="divide-y">
            {rowBody}
          </tbody>
        </table>
      </div>
    </div>
  );
}
