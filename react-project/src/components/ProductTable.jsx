import { useState } from "react";

const ProductTable = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [results, setResults] = useState("results will show here!");

  return (
    <>
      <h2>product table time!</h2>
      <h3>results based on your search term...</h3>
      <p>{results}</p>
      <form>
        <input
          placeholder="enter search term"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </form>
    </>
  );
};

export default ProductTable;
