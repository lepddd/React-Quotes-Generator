import { useEffect, useState, useReducer } from "react";
import axios from "axios";
import QuotesBox from "./Components/QuotesBox";
import QuoteBtn from "./Components/QuoteBtn";
import { quoteReducer, INITIAL_STATE } from "./quoteReducer";

function App() {
  const [quote, setQuote] = useState(null);

  const [state, dispatch] = useReducer(quoteReducer, INITIAL_STATE);

  const fetchData = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const response = await axios.get("https://api.adviceslip.com/advice", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const data = response.data.slip.advice;
      dispatch({ type: "FETCH_SUCCESS", payload: data });      
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <QuotesBox quote={state.quote}>
      <QuoteBtn title={state.loading?"WAIT...":"GIVE ME ADVICE!"} fetchData={fetchData} disabled={state.loading}/>
    </QuotesBox>
  );
}

export default App;

/* <QuotesBox quote={state.quote}>
      <QuoteBtn title={"GIVE ME ADVICE!"} fetchData={fetchData} />
    </QuotesBox> */
