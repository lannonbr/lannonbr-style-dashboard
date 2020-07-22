/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";

import moment from "moment";
import {
  XYPlot,
  LineSeries,
  HorizontalGridLines,
  XAxis,
  YAxis,
  Hint,
} from "react-vis";
import { Helmet } from "react-helmet";

export default (props) => {
  let cssStatsEntries = props.cssStats.entries.Items;

  const data = cssStatsEntries.map((entry) => {
    return {
      x: entry.timestamp,
      y: entry.size / 1000.0,
    };
  });

  const [hoverVal, setHoverVal] = useState({});

  return (
    <main>
      <Helmet>
        <link rel="stylesheet" href="/react-vis.css" />
      </Helmet>
      <h1 className="text-center text-4xl md:text-left md:text-6xl">
        CSS Stats dashboard
      </h1>
      <p>Stats for styles of lannonbr.com</p>
      <XYPlot height={300} width={800} onMouseLeave={() => setHoverVal({})}>
        <LineSeries
          data={data}
          onNearestXY={(val) => {
            setHoverVal(val);
          }}
        />
        <HorizontalGridLines />
        <XAxis
          title={"Date"}
          tickFormat={(d) => {
            return moment.unix(d).format("YYYY-MM-DD");
          }}
        />
        <YAxis title={"Size (in kb)"} />
        <Hint value={hoverVal}>
          <div className="bg-gray-800 text-white p-2">
            <h3>Current size in kb</h3>
            <p>{hoverVal.y}</p>
          </div>
        </Hint>
      </XYPlot>

      <pre>{JSON.stringify(cssStatsEntries, null, 2)}</pre>
    </main>
  );
};
