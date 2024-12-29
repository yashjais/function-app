const Function = ({ inputValue, isFirst, number, handleEquationChange, nextFunction, equation, isLast, onInputChange, outputValue }) => (
  <>
    {
      isFirst && (
        <div className="flex flex-col items-center gap-4">
          <div className="px-4 py-2 rounded-lg bg-orange-100 text-orange-600 text-sm">
            Initial value of x
          </div>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white"
        />
        </div>
      )
    }

    <div className="bg-white rounded-lg shadow-sm p-4 w-64">
      <div className="text-sm text-gray-500 mb-4">::: Function: {number}</div>

      <div className="mb-4">
        <label className="text-sm font-medium block mb-2">Equation</label>
        <input
          type="text"
          value={equation}
          onChange={(e) => handleEquationChange(number, e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="text-sm font-medium block mb-2">Next function</label>
        <select
            className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200"
            value={nextFunction ? `Function: ${nextFunction}` : '-'}
          >
            <option disabled value={nextFunction ? `Function: ${nextFunction}` : '-'}>
              {nextFunction ? `Function: ${nextFunction}` : '-'}
            </option>
          </select>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
          <span className="text-sm">input</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">output</span>
          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
        </div>
      </div>
    </div>
    {
      isLast && (
        <div className="flex items-center gap-4 absolute right-8 top-8">
          <div className="px-4 py-2 rounded-lg bg-green-100 text-green-600 text-sm">
            Final Output y
          </div>
          <div className="px-4 py-2 border rounded-lg bg-white">
            {outputValue}
          </div>
        </div>
      )
    }
  </>
);

export default Function;
