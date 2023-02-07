import { useEffect, useReducer } from "react";
import { quoteReducer, INITIAL_STATE } from "./quoteReducer";
import axios from "axios";

export const useFetch = (url) => {
  const [state, dispatch] = useReducer(quoteReducer, INITIAL_STATE);

  const fetchData = async (url) => {
    dispatch({ type: "FETCH_START" });
    try {
      const res = await axios.get(url);
      const data = await res.data;

      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return { ...state, state, fetchData };
};
