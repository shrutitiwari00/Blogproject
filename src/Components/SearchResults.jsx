import React, { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Datacontext from "../../Datacontext";
// import "./SearchResults.css";

// Helper function to calculate similarity score
const calculateSimilarity = (str1, str2) => {
  const editDistance = (a, b) => {
    const matrix = Array.from({ length: a.length + 1 }, (_, i) =>
      Array(b.length + 1).fill(0)
    );

    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        if (a[i - 1] === b[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // Substitution
            matrix[i][j - 1] + 1,     // Insertion
            matrix[i - 1][j] + 1      // Deletion
          );
        }
      }
    }

    return matrix[a.length][b.length];
  };

  const maxLen = Math.max(str1.length, str2.length);
  const distance = editDistance(str1.toLowerCase(), str2.toLowerCase());
  return (1 - distance / maxLen) * 100; // Similarity percentage
};

const SearchResults = () => {
  const { searchText } = useParams();
  const data = useContext(Datacontext);
  const navigate = useNavigate();

  // Filter items with a similarity score of 70% or more
  const results = data.filter(item => {
    const similarity = calculateSimilarity(item.title, searchText);
    return similarity >= 70; // Threshold for similarity
  });

  return (
    <div className="search-results">
      <button onClick={() => navigate("/")} className="back-button">
        Back to Home
      </button>
      <h3>Search Results for "{searchText}"</h3>
      
      {results.length > 0 ? (
        <div className="results-container">
          {results.map(item => (
            <Link to={`/detail/${item.id}`} key={item.id} className="result-card">
                <h1>{item.title}</h1>
              <img src={item.img_url} alt={item.title} className="result-image" />
              <div>
                <h2>{item.title}</h2>
                <p>{item.description.split(" ").slice(0, 20).join(" ") + "..."}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No results found. Try refining your search.</p>
      )}
    </div>
  );
};

export default SearchResults;