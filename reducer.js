export const initialState = { user: null };

// Action types possible to execute
export const actionTypes = { SET_USER: "SET_USER" };

// Execution depending the action types
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};
export default reducer;
