import Home from "./componets/Home/Home";
import CartContent from "./componets/CartContent/CartContent";
import DataProvider from "./componets/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./componets/CheckoutForm/Checkout";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartContent />} />
          <Route path ='/Checkout' element={<Checkout />}/>
					
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
