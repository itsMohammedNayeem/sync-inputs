import React, { useReducer } from "react";
import { AppContext } from "./AppContext";
import { reducer, initialState } from "./reducer";
import Input_one from "./Input_one";
import Input_two from "./Input_two";
import Switch from "react-switch";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Pass data between React sibling components
        </h1>
        <label className="flex items-center mb-6">
          <span className="mr-2 text-gray-700">Sync Inputs</span>
          <Switch
            checked={state.sync}
            onChange={() => dispatch({ type: "TOGGLE_SYNC" })}
            offColor="#bbb"
            onColor="#4FD1C5"
            className="form-switch"
          />
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-center">
          <AppContext.Provider value={{ state, dispatch }}>
            <Input_one />
            <Input_two />
          </AppContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
