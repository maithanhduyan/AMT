import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/add" element={<AddProduct />} />
              <Route path="/product/edit/:id" element={<EditProduct />} />
            </Routes>
          </div>
        </div>
      </div>
      <br />
      <div>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
