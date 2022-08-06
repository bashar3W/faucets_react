import React from "react";
import DataTable from "../../components/UI/DataTable";
import TextCell from "../../components/UI/DataTable/TextCell";
import { ETHData } from "../../data";

const HomeETHHistory = () => {
  const theadItems = [
    <TextCell key="serial" text="Sr" as="th" className="table_th" />,
    <TextCell key="time" text="Time" as="th" className="table_th" />,
    <TextCell key="amount" text="Amount" as="th" className="table_th" />,
    <TextCell key="hash" text="Hash" as="th" className="table_th" />,
  ];
  const tbodyItems = ETHData.map((d, i) => [
    [
      <TextCell key={d.id} text={i + 1} as="td" className="table_td" />,
      <TextCell key={d.time} text={d.time} as="td" className="table_td" />,
      <TextCell key={d.amount} text={d.amount} as="td" className="table_td" />,
      <TextCell key={d.hash} text={d.hash} as="td" className="table_td" />,
    ],
  ]);
  return (
    <div className="history">
      {/* <div className="eth_history" style={{display: 'flex', alignItems: 'center', margin: '8px 0', fontSize: '13px'}}>
        <span>1.</span>
        <div className="number">
          <p>serlsreuiorjkslufes8er87swer5</p>
        </div>
      </div> */}
      <DataTable
        theadItems={theadItems}
        tbodyItems={tbodyItems}
        noItemMsg="There is no order"
        colSpan="6"
      />
    </div>
  );
};

export default HomeETHHistory;
