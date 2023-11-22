import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const badgeNumber = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(uiActions.toggle())
  }
  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{badgeNumber}</span>
    </button>
  );
};

export default CartButton;
