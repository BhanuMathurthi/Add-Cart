const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((product) => product.name !== action.payload.name);
    default:
      return state;
  }
}
