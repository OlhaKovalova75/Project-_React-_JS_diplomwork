import "./card.css";
import lenovo from "../../assets/image/lenovo.png";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";

const Card = ({ name, setName, product, price, quantity, productOne }) => {
  const url = useLocation();

  console.log(url);
  const navigate = useNavigate();
  console.log(productOne);
  const navigateToPreviewOne = () => {
    navigate("/PreviewOne");
  };

  console.log(name);
  return (
    <div>
      <div className="card" onClick={navigateToPreviewOne}>
        <img src={lenovo} alt="lenovo" />

        <h3>dddddddd{name}</h3>
        <h4 className="price">4444444{productOne}</h4>
        <h6>Кількість: 666666666666{product}</h6>
      </div>
      <div className="cart">
        <BsCart4 className="cart-icon" />
        <h6 className="card-text ">Готовий до відправки</h6>
      </div>
    </div>
  );
};

// const ProductCard = ({product}) => {

//   return (
//       <Card
//           image={product.media.source}
//           header={product.name}
//           meta={product.price.formatted_with_symbol}
//           description={product.description.replace(/(<([^>]+)>)/ig,"")}

// const ProductCard = ({ match }) => {
//   const id = Number(match.params.id);
//   const cardToShow = machines.find((item) => item.id === id);
//   return (
//     <div>
//       <h2>ProductCard:</h2>
//       <h3>Label: {cardToShow.label}</h3>
//       <h3>Description: {cardToShow.description}</h3>
//       <h3>ID: {cardToShow.id}</h3>
//     </div>
//   );
// };

export default Card;
