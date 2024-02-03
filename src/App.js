import Home from "./componets/Home/Home";
import CartContent from "./componets/CartContent/CartContent";
import DataProvider from "./componets/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./componets/CheckoutForm/Checkout";
import Material from "./componets/Material";
import AddressForm from "./componets/CheckoutForm/AddressForm";
import Exform from "./componets/Exform";
import { UserProvider } from "./componets/Context/UserContext";

function App() {
  return (
  
      <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartContent />} />
          <Route path ='/Checkout' element={<Checkout />}/>
					<Route path ='/Material' element={<Material />}/>
          <Route path ='/Exform' element={<Exform />}/>
        </Routes>
      </BrowserRouter>
    </DataProvider>
    
    
  );
}

export default App;
