import './App.css';
import { Header } from  "./components/header/Header";
import { ItemListContainer }  from  "./components/listContainer/ItemListContainer";
import { ItemDetailContainer }  from  "./components/itemDetailContainer/ItemDetailContainer";
import { Cart }  from  "./components/Cart/cart";
import { Home } from "./Pages/Home/Home"
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { CartProvider } from './context/Context';



function App() {

  return (
    <CartProvider>

      <BrowserRouter>

        <Header />

        <Routes> 
          <Route path="/" element={ <Home />} />
          <Route path="/products/:typeId" element={ <ItemListContainer />} />
          <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
          <Route path="/cart" element={ <Cart />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
          
          
      </BrowserRouter>

    </CartProvider>
  );
}

export default App;
