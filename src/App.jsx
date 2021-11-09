import { Fragment } from 'react';
import './App.css';
import Header from  "./components/header/NavBar";
import ItemListContainer from  "./components/listContainer/ItemListContainer";
import ItemCount from "./components/itemCount/ItemCount";

function App() {
  return (
    <Fragment>
      <Header />
      <ItemListContainer />
      <ItemCount />
    </Fragment>
  );
}

export default App;
