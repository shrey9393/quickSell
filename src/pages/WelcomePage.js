import React, { useState } from "react";
import Card from "../components/Card";

function WelcomePage() {
  const [result, setResult] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );

      if (!response.ok || response.status < 200 || response.status >= 300) {
        throw new Error("Failed to fetch data");
      }

      const res = await response.json();
      setResult(res);
      console.log(res);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  const st = {
    color: "f2f2f2",
    backgroundColor: "black",
    padding: "10px",
    borderRadius: "5px",
  };

  return (
    <div className="App">
      <div className="container">
        {result ? (
          result.tickets.map((item) => (
            <>
              {console.log(item)},
              <Card user={item.id} msg={item.title} />
            </>
          ))
        ) : (
          <button onClick={fetchData}>Fetch Data</button>
        )}
      </div>
    </div>
  );
}

export default WelcomePage;
