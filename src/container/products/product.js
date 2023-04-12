import "./product.css";
import Logo from "../../components/Logo/logo";
import preview from "../../assets/image/preview.svg";
import add from "../../assets/image/add.svg";
// import { connect } from "react-redux";
// import { addProductData } from "../../redux/actions";

import { useEffect, useState } from "react";
import TableProducts from "../../components/Table/table";

import ModalDelete from "../../components/Modal_Delete/modal_delete";
import { API_URL } from "../../assets/constants";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import FormAddModal from "../../components/FormAddModal/form_add_modal";

// const sendRequest = async (method, body, id = null) => {
//   await fetch(id ? `${API_URL}/product/${id}` : `${API_URL}/product`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method,
//     body: JSON.stringify(body),
//   });
// };

const Products = () => {
  const [product, setProduct] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  const [category, setCategory] = useState(" ");
  const [name, setName] = useState(" ");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState(" ");

  const [editId, setEditId] = useState(null);

  const [modalActive, setModalActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded) {
      getProducts();
    }
  }, [isLoaded]);

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/product`);
    const data = await response.json();

    //addProductData(data);
    console.log(data);
    setProduct(data);
    setIsLoaded(true);
  };

  console.log(product);

  const addProduct = async (event) => {
    event.preventDefault();
    await fetch(`${API_URL}/product`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        category,
        name,
        quantity,
        price,
        description,
        done: false,
      }),
    });
    setIsLoaded(false);

    setCategory(" ");
    setName(" ");
    setQuantity(null);
    setPrice(null);
    setDescription(" ");
  };

  const editProduct = async (event) => {
    event.preventDefault();
    await fetch(`${API_URL}/product/${editId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        category,
        name,
        quantity,
        price,
        description,
        done: false,
      }),
    });
    setIsLoaded(false);

    setCategory(" ");
    setName(" ");
    setQuantity(null);
    setPrice(null);
    setDescription(" ");

    setEditId(null);
  };

  const deleteProduct = async (event, id) => {
    event.preventDefault();
    await fetch(`${API_URL}/product/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });

    setIsLoaded(false);
  };

  const changedProduct = async (event, deleteId, isDone) => {
    event.preventDefault();
    await fetch(`${API_URL}/product/${deleteId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        done: !isDone,
      }),
    });
    setIsLoaded(false);
  };

  const setEdit = (name, id) => {
    console.log(id);

    setName(name);

    setEditId(id);
  };

  const navigateToPreview = () => {
    navigate("/Preview");
  };

  const url = useLocation();
  console.log(url);

  // const openModal = () => {
  //   setModalState(!modalState);
  // };

  return (
    <div className="products">
      <Logo className="logo" />
      <div className="block_button">
        <div>
          <button className="button" onClick={navigateToPreview}>
            {<img className="img_preview" src={preview} alt="preview" />}{" "}
            Preview
          </button>
        </div>

        <button className="button" onClick={() => setModalActive(true)}>
          {<img className="img_add" src={add} alt="add" />} Add product
        </button>
      </div>

      <h1 className="title">Products</h1>

      <Outlet />

      <TableProducts
        product={product}
        setEdit={setEdit}
        deleteProduct={deleteProduct}
        changedProduct={changedProduct}
      />

      <FormAddModal
        active={modalActive}
        setActive={setModalActive}
        deleteProduct={deleteProduct}
        category={category}
        setCategory={setCategory}
        name={name}
        setName={setName}
        quantity={quantity}
        setQuantity={setQuantity}
        price={price}
        setPrice={setPrice}
        description={description}
        setDescription={setDescription}
        submitForm={editId ? editProduct : addProduct}
      />

      {/* <ModalDelete active={modalActive} setActive={setModalActive} /> */}
    </div>
  );
};

export default Products;
