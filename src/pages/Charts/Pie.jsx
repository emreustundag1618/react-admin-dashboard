import React from 'react';
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective, PieSeries, Inject, AccumulationDataLabel, AccumulationLegend
} from '@syncfusion/ej2-react-charts';
import {
  pieChartData
} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

import { Header } from '../../components';

const Pie = () => {
  const { currentMode } = useStateContext();
  const dataLabel = {
      visible: true
  }
  const textRender = (args) => {
    args.text = args.point.percentage + "%";
  };
  return (
    <div className="m-4 md:m-10 p-4 bg-white mt-16 dark:bg-secondary-dark-bg rounded-2xl">
      <Header category="Chart" title="Pie Chart" />
      <div className="w-full">
        <AccumulationChartComponent
          id="pie-chart"
          height='420px'
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          enableSmartLabels={true}
          textRender={textRender}
        >
          <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={pieChartData} dataLabel={dataLabel} xName='x' yName='y' type='Pie' />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>

      </div>
    </div>

  )
}

export default Pie

