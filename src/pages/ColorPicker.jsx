import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components';

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex
}

const ColorPicker = () => {
  return (
    <div className="m-4 md:m-10 p-4 bg-white mt-16">
      <Header category="App" title="Color Pickers" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>

          <div className="flex justify-center items-center gap-20 flex-wrap">
            <div>
              <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
              <ColorPickerComponent
                id="inline-palette"
                mode="Picker"
                modeSwitcher={false}
                inline
                showButtons={false}
                change={change}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
