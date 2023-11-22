import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  // const {id, title, quantity, total, price } = props.item;
  const { id } = props.item;
  const item = useSelector(state => state.cart.items.find(item => item.id === id))
  const dispatch = useDispatch();

  const decreaseQuantitiyHandler = () => {
    dispatch(cartActions.decreaseQuantity(id));
  }
  const increaseQuantitiyHandler = () => {
    dispatch(cartActions.increaseQuantity(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>
          ${item.total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${item.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQuantitiyHandler}>-</button>
          <button onClick={increaseQuantitiyHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
