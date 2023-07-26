import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";


function App() {
  return (
    <div className="w-full h-full justify-center items-center">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
