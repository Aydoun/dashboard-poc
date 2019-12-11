import React, { memo } from "react";
import Select from "components/Select";
import Box from "components/Box";
import HighchartsReact from "highcharts-react-official";

const extraContent = (
  <div>
    <Select values={["All", 1, 2, 3, 4]} label="Floor" />
    <Select values={["All", 1, 2, 3, 4]} label="Entrance" />
    <Select
      values={["Gender", "Male", "Female"]}
      label="Split By"
      size="large"
    />
  </div>
);

const lineConfig = {
  title: "",
  xAxis: {
    categories: [
      "8:00 AM",
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
      "6:00 PM"
    ]
  },
  yAxis: {
    title: {
      text: ""
    }
  },
  tooltip: {
    enabled: false
  },
  legend: {
    align: "left",
    verticalAlign: "bottom"
  },
  plotOptions: {
    line: {
      marker: {
        enabled: false
      }
    },
    series: {
      color: "#FF0000",
      dataLabels: [
        {
          align: "left"
        }
      ]
    }
  },
  series: [
    {
      name: "Today",
      data: [12, 30, 50, 122, 133, 167, 155, 143, 122, 98, 44]
    }
  ]
};

const Attendane = () => {
  return (
    <Box title="Attendance" extra={extraContent}>
      <div className="dashboard__chart-container">
        <HighchartsReact options={lineConfig} />
      </div>
    </Box>
  );
};

export default memo(Attendane);
