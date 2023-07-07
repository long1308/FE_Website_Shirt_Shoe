import { Routes, Route } from "react-router-dom"
import { BaseLayout } from "./components"
import { HomePages, NotFound, Signin, Signup } from "./pages"
// import "antd/dist/antd.css";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* client */}
        <Route path="*" element={<NotFound />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePages />} />
          {/* <Route path="products/:id" element={<ProductDetail />} /> */}
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
  )
}

export default App
