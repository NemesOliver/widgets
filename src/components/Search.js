import { useState, useEffect } from "react";

const Search = () => {
  //state
  const [term, setTerm] = useState("");

  console.log("I RUN WITH EVERY RERENDER!");

  useEffect(() => {
    console.log("I ONLY RUN ONCE!");
  }, []);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term:</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
