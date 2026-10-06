/* 1. Create a functional component named ProductCard that accepts props for productName and price, and displays them in a styled div. 

4. Add prop type validation to your ProductCard component using the prop-types package to ensure productName is a string and price is a number.<br><br><em><strong>Hint:</strong> Install prop-types with npm and import it in your file.</em>

*/

import React from 'react';
import PropTypes from "prop-types";

function ProductCard({productName,price}) {
  return (
    <div style={{
        border: "1px solid #ddd",
        padding: "20px",
        margin: "10px",
        width: "250px",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9"}}>
            <h2>{productName}</h2>
            <p>Price: {price}</p>
    </div>
  );
}
ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard