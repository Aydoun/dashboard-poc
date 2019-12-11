import React from "react";
import Box from "./";
import Text from "../Text";
import Select from "../Select";
import Pagination from "../Pagination";
import Highcharts from 'highcharts'
// import ReactHighcharts from 'highcharts-react';
// import ReactHighcharts from 'highcharts-react-official';
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
    plotBorderWidth: 1,
    zoomType: "xy"
  },

  legend: {
    enabled: false
  },

  title: {
    text: "Sugar and fat intake per country"
  },

  subtitle: {
    text:
      'Source: <a href="http://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>'
  },

  accessibility: {
    point: {
      descriptionFormatter: function(point) {
        var index = point.index + 1,
          country = point.name,
          fatIntake = point.x,
          sugarIntake = point.y,
          obesity = point.z;

        return (
          index +
          ", " +
          country +
          ", fat: " +
          fatIntake +
          "g, sugar: " +
          sugarIntake +
          "g, obesity: " +
          obesity +
          "%."
        );
      }
    }
  },

  xAxis: {
    gridLineWidth: 1,
    title: {
      text: "Daily fat intake"
    },
    labels: {
      format: "{value} gr"
    },
    plotLines: [
      {
        color: "black",
        dashStyle: "dot",
        width: 2,
        value: 65,
        label: {
          rotation: 0,
          y: 15,
          style: {
            fontStyle: "italic"
          },
          text: "Safe fat intake 65g/day"
        },
        zIndex: 3
      }
    ],
    accessibility: {
      rangeDescription: "Range: 60 to 100 grams."
    }
  },

  yAxis: {
    startOnTick: false,
    endOnTick: false,
    title: {
      text: "Daily sugar intake"
    },
    labels: {
      format: "{value} gr"
    },
    maxPadding: 0.2,
    plotLines: [
      {
        color: "black",
        dashStyle: "dot",
        width: 2,
        value: 50,
        label: {
          align: "right",
          style: {
            fontStyle: "italic"
          },
          text: "Safe sugar intake 50g/day",
          x: -10
        },
        zIndex: 3
      }
    ],
    accessibility: {
      rangeDescription: "Range: 0 to 160 grams."
    }
  },

  tooltip: {
    useHTML: true,
    headerFormat: "<table>",
    pointFormat:
      '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
      "<tr><th>Fat intake:</th><td>{point.x}g</td></tr>" +
      "<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>" +
      "<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>",
    footerFormat: "</table>",
    followPointer: true
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: "{point.name}"
      }
    }
  },

  series: [
    {
      data: [
        { x: 95, y: 95, z: 13.8, name: "BE", country: "Belgium" },
        { x: 86.5, y: 102.9, z: 14.7, name: "DE", country: "Germany" },
        { x: 80.8, y: 91.5, z: 15.8, name: "FI", country: "Finland" },
        { x: 80.4, y: 102.5, z: 12, name: "NL", country: "Netherlands" },
        { x: 80.3, y: 86.1, z: 11.8, name: "SE", country: "Sweden" },
        { x: 78.4, y: 70.1, z: 16.6, name: "ES", country: "Spain" },
        { x: 74.2, y: 68.5, z: 14.5, name: "FR", country: "France" },
        { x: 73.5, y: 83.1, z: 10, name: "NO", country: "Norway" },
        { x: 71, y: 93.2, z: 24.7, name: "UK", country: "United Kingdom" },
        { x: 69.2, y: 57.6, z: 10.4, name: "IT", country: "Italy" },
        { x: 68.6, y: 20, z: 16, name: "RU", country: "Russia" },
        { x: 65.5, y: 126.4, z: 35.3, name: "US", country: "United States" },
        { x: 65.4, y: 50.8, z: 28.5, name: "HU", country: "Hungary" },
        { x: 63.4, y: 51.8, z: 15.4, name: "PT", country: "Portugal" },
        { x: 64, y: 82.9, z: 31.3, name: "NZ", country: "New Zealand" }
      ]
    }
  ]
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

export const withPieChart = () => (
  <Box title="Age" extra={<p>This is extra content</p>}>
    <ReactHighcharts config={pieConfig} highcharts={Highcharts} />
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
    <ReactHighcharts config={lineConfig} highcharts={Highcharts} />
  </Box>
);

export const withBubbles = () => (
  <Box title="Attendance" extra={extraContent}>
    <ReactHighcharts config={bubbleConfig} highcharts={Highcharts} />
  </Box>
);
