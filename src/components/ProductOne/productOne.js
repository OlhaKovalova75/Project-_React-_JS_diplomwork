import "./productOne.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  BsFillPencilFill,
  BsFillBasket2Fill,
  BsArrowDownUp,
  BiDollar,
} from "react-icons/bs";
import { API_URL } from "../../assets/constants";

const sendRequest = async (method, body, id = null) => {
  await fetch(id ? `${API_URL}/product/${id}` : `${API_URL}/product`, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(body),
  });
};

const ProductOne = ({
  deleteProduct,
  item,
  setEdit,
  // product,
  changedProduct,
}) => {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    // sendRequest(id), [id];
  });

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.category}</td>
      <td
        className={item.done ? "line-through" : "line"}
        onClick={(event) => changedProduct(event, item.id, item.done)}
      >
        {item.name}
      </td>
      <td>{item.quantity}</td>
      <td>{item.price}</td>
      <td></td>

      <td></td>
    </tr>
  );
};

// users.map((curUser) => {
//   const {id, name, email} = curUser;
//   const {street, city, zipcode} = curUser.address;

//   return (
//       <tr key={id}>
//           <td>{id}</td>
//           <td>{name}</td>
//           <td>{email}</td>
//           <td>{street}, {city}, {" "}, {zipcode}</td>
//       </tr>
//   )

export default ProductOne;
