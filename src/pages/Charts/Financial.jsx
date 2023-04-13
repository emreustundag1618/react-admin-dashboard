import React from 'react';
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, 
  HiloSeries, DateTime, Tooltip, Zoom, Crosshair
} from '@syncfusion/ej2-react-charts';
import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis
} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

import { Header } from '../../components';

const Financial = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 p-4 bg-white mt-16 dark:bg-secondary-dark-bg rounded-2xl">
      <Header category="Chart" title="Financial Chart Sample" />
      <div className="w-full">
        <ChartComponent
          id="financial-chart"
          height='420px'
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject services={[HiloSeries, Tooltip, DateTime, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            
              <SeriesDirective
              dataSource={financialChartData} 
              xName='x' 
              yName='low'
              type='Hilo' 
              low='low' 
              high='high'
              />
            
          </SeriesCollectionDirective>
        </ChartComponent>

      </div>
    </div>

  )
}

export default Financial

