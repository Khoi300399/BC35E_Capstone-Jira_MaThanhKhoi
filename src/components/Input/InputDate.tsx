import React from "react";
import { DatePicker, Space } from "antd";
type Props = {};

const InputDate = (props: Props) => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <DatePicker.RangePicker
        // status="error"
        className=" bg-bgInput border border-strock rounded-lg"
        style={{
          width: "100%",
          height: "50px",
        }}
        onChange={(datejs, datestring) => {
          console.log(datejs);
          console.log(datestring);
        }}
      />
    </Space>
  );
};

export default InputDate;
