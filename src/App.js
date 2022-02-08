import { NavigationBar } from "./components/NavigationBar"
import { Routes, Route } from "react-router-dom"
import { Home, Products, NotFound404, Product } from "./pages/index"
function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product">
          <Route
            element={<Product />}
            path=":productId/:productTitle/:productDetail/:productCategory"
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
