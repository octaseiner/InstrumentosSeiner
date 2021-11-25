import './App.css';
import { Header } from  "./components/header/Header";
import { ItemListContainer }  from  "./components/listContainer/ItemListContainer";
import { ItemDetailContainer }  from  "./components/itemDetailContainer/ItemDetailContainer";
import { Home } from "./Pages/Home/Home"
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes> 
      <Route path="/" element={ <Home />} />
        <Route path="/products/:typeId" element={ <ItemListContainer />} />
        <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
        
        
    </BrowserRouter>
  );
}

export default App;
