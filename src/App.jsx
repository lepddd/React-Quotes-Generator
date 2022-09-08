import { useEffect, useState } from "react";
import axios from "axios";
import QuotesBox from "./Components/QuotesBox";
import QuoteBtn from "./Components/QuoteBtn";

function App() {
  const [quote, setQuote] = useState(null);

  const fetchData = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    setQuote(response.data.slip.advice);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <QuotesBox quote={quote}>
      <QuoteBtn title={"GIVE ME ADVICE!"} fetchData={fetchData}/>
    </QuotesBox>
  );
}

export default App;
