import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { AdminLayout, BaseLayout, Cart, DashBoardPage } from "./components";
import { HomePages, NotFound, Order, Signin, Signup, Detail_Product, Account, Address, Wishlist, OrderHistory, SigninAdmin } from "./pages";
import { getProducts, addProduct, updateProduct, deleteProduct } from "./store/actions/actionProduct";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "./store/store";
import ListMenuAccount from './pages/account/ListMenuAccount';
import ProductAdd from './components/Admin/ProductAdd';
import Customers from './pages/Admin/Custo/Customers'
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<ListMenuAccount />}>
            <Route index element={<Account />} />
            <Route path="address" element={<Address />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="history" element={<OrderHistory />} />
          </Route>
        </Route>

        {/* admin */}

        <Route path="/admin/signin" element={<SigninAdmin />} />
        <Route path="/admin" element={ <AdminLayout />}>
          <Route index element={<DashBoardPage />} />
          <Route path="products/add" element={<ProductAdd />} />
          <Route path="customers" element={<Customers />} />


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
