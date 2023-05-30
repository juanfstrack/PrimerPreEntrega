import Header from "./components/Header/Header"
import ItemList from "./components/Itemlist/ItemList"
import BorderExample from "./components/BsComponent/BsComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return <div>
    <Header/>
    <ItemList greeting="Hola! Este es el listado de categorías"/>
    <BorderExample/>


  </div>;
}

export default App;
