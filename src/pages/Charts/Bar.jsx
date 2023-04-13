import React from 'react';
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, 
  Category, Tooltip, DataLabel, BarSeries
} from '@syncfusion/ej2-react-charts';
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis
} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

import { Header } from '../../components';

const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 p-4 bg-white mt-16 dark:bg-secondary-dark-bg rounded-2xl">
      <Header category="Chart" title="Bar Chart" />
      <div className="w-full">
        <ChartComponent
          id="bar-chart"
          height='420px'
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject services={[BarSeries, Legend, Tooltip, DataLabel, Category]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) =>
              <SeriesDirective
                key={index} {...item}
              />
            )}
          </SeriesCollectionDirective>
        </ChartComponent>

      </div>
    </div>

  )
}

export default Bar

