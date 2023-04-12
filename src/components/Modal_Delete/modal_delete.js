// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import "./modal_delete.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductOne from "../ProductOne/productOne";

const ModalDelete = ({ deleteProduct, item, active, setModalActive }) => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //  const toggle = () => setModalActive(!modalActive);

  return (
    <div className={active ? "modal_show active" : "modal_show"}>
      <div>
        <p>Are sure you want to delete this product?</p>

        <div>
          <button variant="secondary" onClick={() => navigate(0)}>
            Cancel
          </button>
          <button className="delete" variant="primary" onClick={handleClose}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
