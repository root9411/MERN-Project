import './CartScreen.css'
import Navbar from '../Navbar'
import SideDrawer from '../SideDrawer'
import Backdrop from '../Backdrop'
import {useState} from 'react';
import CartItem from '../Cartitem';


const CartScreen = () => {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div className='cartscreen1'>
      <Navbar click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
        <div className='cartscreen'>

        <div className='cartscreen__left'>
          <h2>Shopping Cart</h2>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
        </div>
        <div className='cartscreen__right'>
          <div className='cartscreen__info'>
            <p>Subtotal (0) items</p>
            <p>$499.99</p>
          </div>
          <div>
            <button>Proceed to Checkout</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default CartScreen
