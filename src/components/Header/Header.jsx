import "./Header.css";

const Header = () => {
	return (
		<div className="header__container">
			<header className="header">
				<h1 className="title">TúCompra</h1>
				<nav className="navBar">
					<ul className="list__items">
						<li><a href="*" className="list__links" >Home</a></li>
                        <li><a href="*" className="list__links" >Carrito</a></li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Header;
