import "./Card.css";
import { useCart } from "../context/CartContext";
// import product_image from "../Assets/headphone.jpg";
import { useEffect, useState } from "react";

const Card = ({ product }) => {
  const { id, name, price, Prd_image } = product;

  const { addToCart, cartList, removeFromCart } = useCart();

  const [isInCart, setIsInCart] = useState(false);

  const handleClick = () => {
    addToCart(product);
    console.log(cartList);
  };
  useEffect(() => {
    const productIsInCart = cartList.find(
      (cartItem) => cartItem.id === product.id
    );

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);

  return (
    <div className="productCard">
      <img src={Prd_image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>
            {" "}
            Remove{" "}
          </button>
        ) : (
          <button onClick={handleClick}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};

export default Card;
