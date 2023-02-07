import QuotesBox from "./Components/QuotesBox";
import { useFetch } from "./useFetch";

function App() {
  const url = "https://api.quotable.io/random";
  const { state, quote, fetchData } = useFetch(url);

  return (
    <QuotesBox quote={quote} state={state} fetchData={() => fetchData(url)} />
  );
}

export default App;
