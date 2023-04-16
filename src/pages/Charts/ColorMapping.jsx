import React from 'react';
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, 
  Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries, 
  RangeColorSettingDirective, RangeColorSettingsDirective
} from '@syncfusion/ej2-react-charts';
import {
  colorMappingData,
  ColorMappingPrimaryYAxis,
  ColorMappingPrimaryXAxis,
  rangeColorMapping
} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

import { Header } from '../../components';

const ColorMapping = () => {
  const {currentMode} = useStateContext();
  return (
    <div className="m-4 md:m-10 p-4 bg-white mt-16 dark:bg-secondary-dark-bg rounded-2xl">
      <Header category="Chart" title="Range Color Mapping Column Chart Sample" />
      <div className="w-full">
        <ChartComponent
          id="mapping-chart"
          height='420px'
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{mode: 'Range', background: 'white'}}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName='x'
              yName='y'
              type='Column'
              cornerRadius={{
                topLeft:5,
                topRight:5
              }}
            />

          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item}/>)}
          </RangeColorSettingsDirective>
        </ChartComponent>

      </div>
    </div>
  )
}

export default ColorMapping
