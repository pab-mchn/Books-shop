import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./Products.css";

const Products = () => {
  const { data, cart, setCart } = useContext(dataContext);

  const buyProducts = (product) => {
    setCart([...cart, product]);
  };

  return data.map((product) => {
    return (
      <div className='card' key={product.id}>
        <img src={product.img} alt='img-product-card' />
        <h3>{product.name}</h3>
        <h4>{product.price}$</h4>
        <button onClick={() => buyProducts(product)}>buy</button>
      </div>
    );
  });
};

export default Products;
