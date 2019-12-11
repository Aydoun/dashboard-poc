import React from "react";
import Box from "./";
import Text from "../Text";
import Select from "../Select";
import Pagination from "../Pagination";

import HighchartsMore from "highcharts/highcharts-more";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

HighchartsMore(Highcharts);

export default { title: "Box" };

const pieConfig = {
  chart: {
    type: "pie",
    height: 350,
    spacingLeft: -150
  },
  title: "",
  legend: {
    align: "right",
    verticalAlign: "middle",
    layout: "vertical"
  },
  credits: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  series: [
    {
      type: "pie",
      data: [
        ["Apples", 29.9, false],
        ["Pears", 71.5, false],
        ["Oranges", 106.4, false],
        ["Plums", 129.2, false],
        ["Bananas", 144.0, false],
        ["Peaches", 176.0, false],
        ["Prunes", 135.6, true, true],
        ["Avocados", 148.5, false]
      ],
      showInLegend: true
    }
  ]
};

const ballStyle = {
  width: 100,
  height: 100,
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  borderRadius: "50%",
  color: "white",
  fontWeight: "bold",
  backgroundImage: "linear-gradient(to top, #fbc2eb 0%, #a18cd1 100%)",
  wordSpacing: 100,
  fontSize: "1.5em"
};

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
    // labels: {
    //   formatter: function() {
    //     const pos = this.value;

    //     if (pos < 30) return "<30";
    //     if (pos >= 30 && pos < 40) return "30-40";
    //     if (pos >= 40 && pos < 50) return "40-50";
    //     else return ">50";
    //   }
    // },
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

const radarConfig = {
  chart: {
    polar: true,
    // type: 'area',
  },
  title: {
    text: "",
  },
  tooltip: {
    enabled: false,
  },
  yAxis: {
    visible: false,
  },
  xAxis: {
    visible: false,
  },
  series: [
    {
      type: 'area',
      data: [33, 22, 20, 25],
    },
  ],
};

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

export const empty = () => <Box />;
export const withTitle = () => (
  <Box title="title" extra={<p>This is extra content</p>}>
    <p>I'm Content</p>
  </Box>
);

export const withPagination = () => (
  <Box title="Age" extra={<Text color="gray">(This is dwell time)</Text>}>
    <div style={{ marginTop: 10 }}>
      <div style={ballStyle}>14 min</div>
      <br />
      <div>
        <Text color="gray" size="small">
          Floor
        </Text>
        <br />
        <Pagination
          initialCheck={3}
          collection={[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
      </div>
      <div>
        <Text color="gray" size="small">
          Zones
        </Text>
        <br />
        <Pagination
          initialCheck={0}
          collection={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        />
      </div>
    </div>
  </Box>
);

export const withLine = () => (
  <Box title="Attendance" extra={extraContent}>
    <HighchartsReact options={lineConfig} />
  </Box>
);

export const withPieChart = () => (
  <Box title="Age" extra={<p>This is extra content</p>}>
    <HighchartsReact options={pieConfig} />
  </Box>
);

export const withRadarChart = () => (
  <Box title="Age" extra={<p>This is extra content</p>}>
    <HighchartsReact options={radarConfig} />
  </Box>
);

export const withBubbles = () => (
  <Box title="Attendance" extra={extraContent}>
    <HighchartsReact options={bubbleConfig} />
  </Box>
);
