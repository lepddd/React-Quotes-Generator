export const INITIAL_STATE = {
  loading: false,
  error: false,
  quote: "",
};

export function quoteReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: false,
        quote: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: true,
        quote: {},
      };
    default:
      return state;
  }
}
