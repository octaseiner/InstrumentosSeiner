import { Fragment } from 'react';
import './App.css';
import { Header } from  "./components/header/Header";
import { ItemListContainer }  from  "./components/listContainer/ItemListContainer";
import { ItemDetailContainer }  from  "./components/itemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <Fragment>
      <Header />
      <ItemListContainer />
      <ItemDetailContainer />
    </Fragment>
  );
}

export default App;
