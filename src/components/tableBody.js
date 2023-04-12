import ProductOne from "./ProductOne/productOne";

const TableBody = ({ deleteProduct, product, setEdit, changedProduct }) => {
  return (
    <>
      {/* <ul className="table_content"> */}
      {product.map((productOne) => (
        <ProductOne
          key={productOne.id}
          product={product}
          item={productOne}
          setEdit={setEdit}
          deleteProduct={deleteProduct}
          changedProduct={changedProduct}
        />
      ))}
      {/* </ul> */}
    </>
  );
};

export default TableBody;
