import { useState } from "react";
import axios from "axios";

function Wisdom() {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        console.log(res.data.content);
        setQuote(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2 style={{ textAlign: "Center" }}>Words of Wisdom</h2>
      <button onClick={getQuote}>Get Quote</button>
      {quote && <p>{quote}</p>}
    </div>
  );
}

export default Wisdom;
