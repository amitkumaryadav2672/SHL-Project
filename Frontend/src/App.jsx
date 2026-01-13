import { useState } from "react";
import SearchBox from "./components/SearchBox";
import Results from "./Components/Results";
import { fetchRecommendations } from "./api/api";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const res = await fetchRecommendations(query);
      setResults(res.data.recommendations);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>SHL Assessment Search</h1>

      <SearchBox onSearch={handleSearch} />

      {loading ? <p className="loading">Loading...</p> : <Results data={results} />}
    </div>
  );
}

export default App;
