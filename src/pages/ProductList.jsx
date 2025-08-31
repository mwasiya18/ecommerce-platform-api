import ProductCard from '../components/ProductCard';

function ProductList() {
  const products = [
    { name: "Laptop", price: 50000 },
    { name: "Headphones", price: 1500 },
    { name: "Smartphone", price: 25000 },
  ];

  return (
    <div className="products">
      {products.map((p, i) => (
        <ProductCard key={i} name={p.name} price={p.price} />
      ))}
    </div>
  );
}
export default ProductList;