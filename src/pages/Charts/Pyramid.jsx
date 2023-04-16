import React from 'react';
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, 
  AccumulationSeriesDirective, Inject, 
  AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel
} from '@syncfusion/ej2-react-charts';
import {
  PyramidData
} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

import { Header } from '../../components';

const Pyramid = () => {
  const {currentMode} = useStateContext();
  return (
    <div className="m-4 md:m-10 p-4 bg-white mt-16 dark:bg-secondary-dark-bg rounded-2xl">
      <Header category="Chart" title="Pyramid Chart Sample" />
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          height='420px'
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ mode: 'Range', background: 'white' }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          enableSmartLabels='true'
        >
          <Inject services={[AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel]} />
          <AccumulationSeriesCollectionDirective>

            <AccumulationSeriesDirective
              name='Food'
              dataSource={PyramidData}
              dataLabel={{ visible: true, name: "text" }}
              xName='x'
              yName='y'
              width="50%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.1}
              explode
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              type='Pyramid'
            />

          </AccumulationSeriesCollectionDirective>
          
        </AccumulationChartComponent>

      </div>
    </div>
  )
}

export default Pyramid
