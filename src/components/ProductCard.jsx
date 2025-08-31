import { useState } from 'react';

function ProductCard({ name, price }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button onClick={() => setAdded(true)}>
        {added ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
export default ProductCard;