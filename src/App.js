import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./container/privateRoute";
import "./App.css";
import Error from "./container/Error/error";
import Login from "./container/Login/login";
import PreviewOne from "./container/PreviewOne/previewOne";
import Products from "./container/Products/product";
import Preview from "./container/Preview/preview";

import Nav from "./components/Nav/nav";
import FormAddModal from "./components/FormAddModal/form_add_modal";
import FormEditModal from "./components/FormEditModal/form_edit_modal";
import ProductOne from "./components/ProductOne/productOne";
import TableProducts from "./components/Table/table";
// import { Link } from "react-router-dom";

const App = () => {
  // const location = useLocation();
  // const background = location.state && location.state.background;

  return (
    <div className="App">
      <p>ROZETKA</p>

      <BrowserRouter>
        <Nav />

        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/products" element={<Products />}>
              <Route path="/products/:id" element={<ProductOne />} />{" "}
              <Route path="/products/:id" element={<TableProducts />} />
              <Route path="/products/*" element={<FormAddModal />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route exact path="/preview" element={<Preview />} />
              <Route
                path=":id"
                element={
                  <div>
                    <PreviewOne />
                  </div>
                }
              ></Route>
            </Route>
            <Route element={<PrivateRoute />}></Route>{" "}
            {/* <Route path="/previewOne" element={<PreviewOne />} />{" "} */}
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
