import Table from "react-bootstrap/Table";
import { useState } from "react";
import "./table.css";
import {
  BsFillPencilFill,
  BsFillBasket2Fill,
  BsArrowDownUp,
  BiDollar,
} from "react-icons/bs";
import ModalDelete from "../Modal_Delete/modal_delete";
import ProductOne from "../ProductOne/productOne";
import FormEditModal from "../FormEditModal/form_edit_modal";
import FormAddModal from "../FormAddModal/form_add_modal";

const TableProducts = ({
  deleteProduct,
  product,
  item,
  // data,
  setEdit,
  changedProduct,
}) => {
  const [data, setData] = useState(product);
  const [modalActive, setModalActive] = useState(false);
  const [modalEditActive, setModalEditActive] = useState(false);

  // Delete
  const toggle = () => setModalActive(!modalActive);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // sorting
  const [order, setOrder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1));

      setData(sorted);
      setOrder("DSC");
    }

    if (order === "DSC") {
      const sorted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setData(sorted);
      setOrder("ASC");
    }
  };

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th onClick={() => sorting("id")}>
            ID <BsArrowDownUp />
          </th>

          <th onClick={() => sorting("category")}>
            Category <BsArrowDownUp />
          </th>
          <th onClick={() => sorting("name")}>
            Name <BsArrowDownUp />
          </th>
          <th onClick={() => sorting("quantity")}>
            Quantity <BsArrowDownUp />
          </th>
          <th onClick={() => sorting("price")}>
            Price <BsArrowDownUp />
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {product.map((productOne) => (
          <tr key={productOne.id}>
            <td>{productOne.id}</td>
            <td>{productOne.category}</td>
            <td
              className={productOne.done ? "line-through" : "line"}
              onClick={(event) =>
                changedProduct(event, productOne.id, productOne.done)
              }
            >
              {productOne.name}
            </td>
            <td>{productOne.quantity}</td>
            <td>{productOne.price}</td>
            <td className="edit_delete">
              <i onClick={() => setModalEditActive(true)}>
                <BsFillPencilFill />
                <FormEditModal
                  active={modalEditActive}
                  setActive={setModalEditActive}
                />
                {/* <FormAddModal
                  input
                  defaultValue=""
                  value={item.category}
                  active={modalEditActive}
                  setActive={setModalEditActive}
                /> */}
              </i>{" "}
            </td>
            <td className="edit_delete" onClick={() => setModalActive(true)}>
              <BsFillBasket2Fill
                // onClick={handleShow}
                onClick={(event) => deleteProduct(event, productOne.id)}
              />
              <ModalDelete active={modalActive} setActive={setModalActive} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableProducts;
