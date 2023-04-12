import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./form_add_modal.css";

const FormAddModal = ({
  category,
  setCategory,
  name,
  setName,
  quantity,
  setQuantity,
  price,
  setPrice,
  description,
  setDescription,
  submitForm,
  active,
  setActive,

  children,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(true)}
    >
      {" "}
      <form
        className="form_modal"
        // onClick={(e) => e.stopPropagation}
        onSubmit={submitForm}
      >
        {children}
        <div>
          <label>Add product</label>
        </div>

        <label>Category</label>
        <input
          className="input"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <div className="mb-3">
          <label>Name</label>
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Quantity</label>
          <input
            className="input"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input
            className="input"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <input
            className="input"
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="button_form">
          <button variant="secondary" type="button" onClick={() => navigate(0)}>
            Cancel
          </button>
          <button variant="primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddModal;
