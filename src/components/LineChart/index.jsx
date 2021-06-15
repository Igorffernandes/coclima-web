import React from 'react';

import { VictoryLine, VictoryBar } from 'victory';

const LineChart = ({type, filter}) => {
  if (type === 'line') {
    return( 
      <div>
          <VictoryLine
            height={400}
            width={1850}
            style={{
              data: { stroke: "#0A8F4A" },
              parent: {
                border: "0px solid #ccc",
              },
            }}
            data={filter}
          />
      </div>
    )
  }

  if (type === 'bar') {
    return( 
      <div>
          <VictoryBar
            height={400}
            width={1850}
            style={{
              data: { stroke: "#0A8F4A", fill: '#0A8F4A' },
              parent: {
                border: "0px solid #ccc",
              },
            }}
            data={filter}
          />
      </div>
    )
  }

  return( 
    <div>
        <VictoryLine
          style={{
            data: { stroke: "#0A8F4A" },
            parent: {
              border: "0px solid #ccc",
              width: '100%',
            },
          }}
          data={filter}
        />
    </div>
  )
}

export default LineChart;