import React, { memo } from "react";
import Text from 'components/Text';
import Box from 'components/Box';
import HighchartsReact from "highcharts-react-official";
import DwellTime from '../DwellTime';

const pieConfig = {
  chart: {
    type: "pie",
    height: 250,
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

const radarConfig = {
  chart: {
    polar: true,
    height: 250
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

const VisualOverview = props => {
  return (
    <div className="dashboard__grid">
      <Box title="Age">
        <div className="dashboard__chart-container">
          <HighchartsReact options={pieConfig} />
        </div>
      </Box>
      <Box title="Mood">
        <div className="dashboard__chart-container">
          <HighchartsReact options={radarConfig} />
        </div>
      </Box>
      <Box title="Dwell Time" extra={<Text color="gray">(This is dwell time)</Text>}>
        <DwellTime />
      </Box>
    </div>
  );
};

export default memo(VisualOverview);
