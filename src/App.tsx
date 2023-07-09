import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { AdminLayout, BaseLayout, DashBoardPage } from "./components";
import { HomePages, NotFound, Order, Signin, Signup, Detail_Product } from "./pages";
import { getProducts, addProduct, updateProduct, deleteProduct } from "./store/actions/actionProduct";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "./store/store";
import ListGroup from './pages/account/ListGroup';
import Layout from './pages/account/Layout';
import Wishlist from './pages/account/page/Wishlist';
import Account from './pages/account/page/Account';
import History from './pages/account/page/History';
import Addresses from './pages/account/page/Addresses';
function App() {
  const dispatch = useDispatch();
  const [isProductsLoaded, setProductsLoaded] = useState(false);
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    if (!isProductsLoaded) {
      dispatch(getProducts() as never);
      setProductsLoaded(true);
    }
  }, [dispatch, isProductsLoaded]);
  return (
    <div className="App">
      <Routes>
        {/* client */}
        <Route path="*" element={<NotFound />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />

        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePages products={products} />} />
          <Route path="order" element={<Order />} />
          <Route path="products/:id" element={<Detail_Product />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Route>
        <Route path="/ListGroup" element={<Layout/>}>
          <Route index element={<ListGroup />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="Account" element={<Account />} />
          <Route path="History" element={<History />} />
          <Route path="Addresses" element={<Addresses />} />





          {/* <Route path="products/:id" element={<ProductDetail />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Route>
        {/* admin */}
        <Route path="/admin" element={
          <AdminLayout />
        }>
          <Route index element={<DashBoardPage />} />
          {/* <Route
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
          /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
