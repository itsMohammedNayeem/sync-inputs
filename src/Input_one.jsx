// Input_one.js
import React, { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Input_one() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="relative">
      <input
        type="text"
        value={state.inputTextOne}
        onChange={(e) =>
          dispatch({ type: "UPDATE_INPUT_ONE", data: e.target.value })
        }
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="Input One"
      />
    </div>
  );
}
