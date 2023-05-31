import Header from "./components/Header/Header";
import ItemList from "./components/Itemlist/ItemList";
import BorderExample from "./components/BsComponent/BsComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./components/Cart/CartWidget";

function App() {
	const imageUrl =
		"https://images.unsplash.com/photo-1611275484845-52a71f2b0a6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

	const itemCount = 3;

	return (
		<div>
			<Header />
			<ItemList greeting="Hola! Este es el listado de categorías" />
			<BorderExample />
			<CartWidget imageUrl={imageUrl} itemCount={itemCount} />
		</div>
	);
}

export default App;
