import React from "react";
import Box from "./";
import Text from "../Text";
import Select from '../Select';
import Pagination from "../Pagination";
import ReactHighcharts from "react-highcharts";

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
  title: '',
  xAxis: {
    categories: ['8:00 AM', '9:00 AM', '10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM', '6:00 PM' ]
  },
  yAxis: {
    title: {
      text: ""
    }
  },
  tooltip: {
    enabled: false,
  },
  plotOptions: {
    line: {
      marker: {
        enabled: false,
      }
    },
    series: {
      color: '#FF0000'
    }
  },
  series: [
    {
      name: "Today",
      data: [12, 30, 50, 122, 133, 167, 155, 143, 122, 98, 44]
    }
  ]
};

const extraContent = (
  <div>
    <Select values={['All', 1, 2, 3, 4]} label="Floor" />
    <Select values={['All', 1, 2, 3, 4]} label="Entrance" />
    <Select values={['Gender', 'Male', 'Female']} label="Split By" size="large" />
  </div>
)

export const empty = () => <Box />;
export const withTitle = () => (
  <Box title="title" extra={<p>This is extra content</p>}>
    <p>I'm Content</p>
  </Box>
);

export const withPieChart = () => (
  <Box title="Age" extra={<p>This is extra content</p>}>
    <ReactHighcharts config={pieConfig} />
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
    <ReactHighcharts config={lineConfig} />
  </Box>
);
