import React from 'react';

const Function = ({ isStarting, number, nextFunction, isFinal }) => (
  <>
    {
      isStarting && (
        <p>Input</p>
      )
    }
    <div className="w-64 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="space-y-4">
        <div className="text-sm text-gray-500">
          ::: Function: {number}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Equation</label>
          <input
            type="text"
            value="x^2"
            className="w-full px-3 py-2 border rounded-md bg-white"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Next function</label>
          <select className="w-full px-3 py-2 border rounded-md bg-white text-gray-400">
            <option disabled>{nextFunction ? `Function: ${nextFunction}` : '-'}</option>
          </select>
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="type"
              className="w-4 h-4 text-blue-600"
              checked
            />
            <span className="text-sm">input</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">output</span>
            <input
              type="radio"
              name="type"
              className="w-4 h-4 text-blue-600"
            />
          </div>
        </div>
      </div>
    </div>
    {
      isFinal && (
        <p>Output</p>
      )
    }
  </>
);

export default Function;
