export const initialState = {
  inputTextOne: "",
  inputTextTwo: "",
  sync: false,
  lastInputUpdated: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_INPUT_ONE":
      return {
        ...state,
        inputTextOne: action.data,
        inputTextTwo: state.sync ? action.data : state.inputTextTwo,
        lastInputUpdated: "inputOne",
      };
    case "UPDATE_INPUT_TWO":
      return {
        ...state,
        inputTextOne: state.sync ? action.data : state.inputTextOne,
        inputTextTwo: action.data,
        lastInputUpdated: "inputTwo",
      };
    case "TOGGLE_SYNC":
      const syncData =
        state.lastInputUpdated === "inputOne"
          ? state.inputTextOne
          : state.inputTextTwo;
      return {
        ...state,
        sync: !state.sync,
        inputTextOne: !state.sync ? syncData : state.inputTextOne,
        inputTextTwo: !state.sync ? syncData : state.inputTextTwo,
      };
    default:
      return state;
  }
};
