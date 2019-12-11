import React, { memo } from "react";
import Select from "components/Select";
import Box from "components/Box";
import HighchartsMore from "highcharts/highcharts-more";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

HighchartsMore(Highcharts);

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

const bubbleConfig = {
  chart: {
    type: "bubble",
    plotBorderWidth: 0
  },
  legend: {
    enabled: false
  },
  title: {
    text: ""
  },
  tooltip: {
    enabled: false
  },
  plotOptions: {
    series: [
      {
        color: "#FF0000"
      },
      {
        color: "#FFFF00"
      }
    ]
  },
  xAxis: {
    categories: ["10", "15", "20", "25", "30", "35", "40", "50", "60"],
    labels: {
      format: "{value} min"
    },
    tickInterval: 5
  },
  yAxis: {
    title: {
      text: ""
    },
    tickInterval: 10
  },
  series: [
    {
      borderWidth: 0,
      data: [{ x: 10.5, y: 20, z: 13.8 }, { x: 15.5, y: 32, z: 13.8 }]
    },
    {
      borderWidth: 0,
      data: [{ x: 10, y: 20, z: 13.8 }, { x: 15, y: 32, z: 13.8 }]
    }
  ]
};

const AgeTimeComparison = () => {
  return (
    <Box title="Attendeese Age Vs Dwell Time" extra={extraContent}>
      <div className="dashboard__chart-container">
        <HighchartsReact options={bubbleConfig} />
      </div>
    </Box>
  );
};

export default memo(AgeTimeComparison);
