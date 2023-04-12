import { useNavigate } from "react-router-dom";
import ProductOne from "../ProductOne/productOne";
import "./form_edit_modal.css";

const FormEditModal = ({
  product,
  name,
  setName,
  category,
  setCategory,
  quantity,
  setQuantity,
  price,
  setPrice,
  description,
  setDescription,
  submitForm,
  active,
  setActive,

  ProductOne,
  item,
  setEdit,
}) => {
  const navigate = useNavigate();
  console.log(item);
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
        <div>
          <label>Edit product</label>
        </div>

        <label>Category</label>
        <input
          className="input"
          type="text"
          value={category}
          disabled
          defaultValue={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {/* {item.category} */}
        </input>

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

export default FormEditModal;

//

// export const Modal = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="modalDiv">
//       <div className="modal">
//         <h3>Modal</h3>
//         <button onClick={() => navigate(-1)}>Close</button>
//       </div>
//     </div>
//   );
// };
