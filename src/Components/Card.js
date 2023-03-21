import "./Card.css";
import product_image from '../Assets/headphone.jpg'


const Card = ({product}) => {
  const {name, price, image} = product;

  return (
    <div className="productCard">
      <img src={product_image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  )
}

export default Card;