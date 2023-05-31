import "./CartWidget.css"



const CartWidget = ({ imageUrl, itemCount }) => {
    return (
      <div className="cart__container">
        <img className="cart__img" src={imageUrl} alt="Cart" />
        <span className="cart__number">{itemCount}</span>
      </div>
    );
  };
  
  export default CartWidget;