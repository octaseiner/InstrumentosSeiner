import { Fragment } from 'react';
import './App.css';
import Header from  "./components/header/Header";
import ItemListContainer from  "./components/listContainer/ItemListContainer";
import ItemCount from "./components/itemCount/ItemCount";

function App() {
  return (
    <Fragment>
      <Header />
      <ItemListContainer greeting="Welcome to The Music Store!"/>
      <ItemCount />
    </Fragment>
  );
}

export default App;
