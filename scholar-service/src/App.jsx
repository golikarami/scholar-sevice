import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const handleSearch = async () => {
    try {
      const response = await fetch("http://localhost:8000/scholar/profile/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_url: query,
        }),
      });

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    console.log("Searching for:", query);
  };
  return (
    <div>
      <h1>Professor Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter professor name"
      />
      <p>typing: {query}</p>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
export default App;
