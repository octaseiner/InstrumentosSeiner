import { Fragment } from 'react';
import './App.css';
import Header from  "./components/header/Header";
import ItemListContainer from  "./components/listContainer/ItemListContainer";


function App() {
  return (
    <Fragment>
      <Header />
      <ItemListContainer greeting="Welcome to The Music Store!"/>
    </Fragment>
  );
}

export default App;
