import React from 'react';

import { VictoryLine } from 'victory';

const LineChart = ({}) => {
  return(
    <div>
        <VictoryLine
          style={{
            data: { stroke: "#0A8F4A" },
            parent: { border: "1px solid #ccc"},
          }}
          data={[
            { x: 1, y: 7 },
            { x: 2, y: 5 },
            { x: 3, y: 1 },
            { x: 4, y: 8 },
            { x: 5, y: 10 },
            { x: 6, y: 20 },
            { x: 7, y: 18 }
          ]}
        />
    </div>
  )
}

export default LineChart;