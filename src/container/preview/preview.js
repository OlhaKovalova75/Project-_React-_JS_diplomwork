import "./preview.css";
import Logo from "../../components/Logo/logo";
import Card from "../../components/Card/card";
import ProductOne from "../../components/ProductOne/productOne";
import { Outlet } from "react-router-dom";

// !!!!!!!import Form from 'react-bootstrap/Form'

const Preview = ({
  productOne,
  product,
  setProduct,
  price,
  name,
  quantity,
  setName,
}) => {
  console.log(product);
  return (
    <div className="container">
      <div className="preview-container">
        <Logo className="logo_preview" />
        <div className="card-preview">
          {product?.map((productOne) => (
            <Card
              key={productOne.id}
              name={productOne.name}
              productOne={productOne}
              product={product}
            />
          ))}

          <Card />

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Preview;
