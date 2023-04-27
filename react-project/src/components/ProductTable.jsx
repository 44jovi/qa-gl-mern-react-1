import { useState } from "react";

const ProductTable = () => {
  const products = ["apple", "banana", "cheese"];
  const [searchTerm, setSearchTerm] = useState(null);

  return (
    <>
      <h2>product table time!</h2>
      <h3>type "apple" or "juice"</h3>
      <p>{products.filter((p) => p.toLowerCase().startsWith(searchTerm))}</p>
      <input
        name="searchTerm"
        placeholder="type here!"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </>
  );
};

export default ProductTable;
