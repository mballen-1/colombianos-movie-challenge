import React from 'react';
import { ResponsiveLine } from '@nivo/line';



function BumpGraph({ data }: any) {
  const theme = {
    axis: {
      ticks: {
        line: {
          stroke: "ecd72e"
        },
        text: {
          fill: "8abdf3",
          fontFamily: 'Rubik-Bold',
          fontSize: 12,
          fontStretch: 'normal',
          fontStyle: 'normal',
          lineHeight: 'normal',
          letterSpacing: 1.5
        }
      }
    },
    grid: {
      line: {
        stroke: "#8abdf3",
        strokeWidth: 2
      }
    }
  }

  return (
    <ResponsiveLine
      data={data}
      curve="linear"
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0
      }}
      colors={["#ecd72e", "#8abdf3"]}
      pointSize={5}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="y"
      enableSlices="y"
      pointLabelYOffset={-12}
      useMesh={true}
      enableGridX={false}
      theme={theme}
    />
  )
}

export default BumpGraph;