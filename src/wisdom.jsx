import { useState } from "react";
import axios from "axios";

function Wisdom() {

  const [quote, setQuote] = useState("");

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        console.log(response.data.content);
        setQuote(response.data.content);
      })
      .catch((error) => {
        console.log(error);
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
