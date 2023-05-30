import "./ItemList.css";

const ItemList = ({ greeting }) => {
	return (
		<div className="items__container">
			<h1>{greeting}</h1>
			<p>A continuación las categorías.</p>

			<ul className="list__container">
				<li>
					<a className="list__items" href="*">Categoría 1</a>
				</li>
				<li>
					<a className="list__items" href="*">Categoría 2</a>
				</li>
				<li>
					<a className="list__items" href="*">Categoría 3</a>
				</li>
			</ul>
		</div>
	);
};


export default ItemList;
