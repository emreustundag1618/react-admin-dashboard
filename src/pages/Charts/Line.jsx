import React from 'react';

import { Header, LineChart} from "../../components";

const Line = () => {
  return (
    <div className="m-4 md:m-10 p-4 bg-white mt-16 dark:bg-secondary-dark-bg rounded-2xl">
      <Header category="Chart" title="Inflation Rate" />
      <div className="w-full">
        <LineChart />

      </div>
    </div>
  )
}

export default Line
