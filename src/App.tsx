import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { BaseLayout } from "./components";
import { HomePages, NotFound, Order, Signin, Signup, Detail_Product } from "./pages";
import { getProducts, addProduct, updateProduct, deleteProduct } from "./store/actions/actionProduct";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "./store/store";
function App() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  useEffect(() => {
    dispatch(getProducts() as never); // Dispatch the action to get the products
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        {/* client */}
        <Route path="*" element={<NotFound />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePages />} />
          <Route path="order" element={<Order />} />
          <Route path="products/:id" element={<Detail_Product />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Route>
        {/* admin */}
        {/* <Route path="/admin" element={
          <AdminLayout />
        }>
          <Route index element={<DashBoardPage />} />
          <Route
            path="products"
            element={
              <AdminProduct
                products={products}
                onRemove={onHandDeleteProduct}
              />
            }
          />
          <Route
            path="products/:id/update"
            element={<AdminEditProduct onEdit={onHandEditProduct} />}
          />
          <Route
            path="products/add"
            element={<AdminAddProduct onAdd={onHandAddProduct} />}
          />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
