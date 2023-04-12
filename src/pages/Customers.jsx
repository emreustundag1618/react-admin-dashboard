import React from 'react';
import {
  GridComponent, ColumnsDirective, ColumnDirective,
  Page, Selection, Inject, Sort, Filter, Toolbar, Edit
} from '@syncfusion/ej2-react-grids';

import { customersData, contextMenuItems, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className="m-4 md:m-10 p-4 bg-white mt-16">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete', 'Add', 'Edit']}
        editSettings={{ allowDeleting: true, allowEditing: true, allowAdding: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Edit]} />
      </GridComponent>
    </div>
  )
}

export default Customers
