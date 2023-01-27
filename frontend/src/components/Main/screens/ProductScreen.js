import './ProductScreen.css';
import Navbar from '../Navbar';
import SideDrawer from '../SideDrawer';
import Backdrop from '../Backdrop';
import { useState , useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { getProductDetails } from '../redux/actions/productActions';
import { addToCart} from '../redux/actions/cartActions';

const ProductScreen = ({match, history}) => {

  const [sideToggle, setSideToggle] = useState(false);

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.getProductDetails);
  const {loading,error,product} = productDetails;

  useEffect(()=>{
    if(product && match.params.id !== product._id){
      dispatch(getProductDetails(match.params.id))
    }
  },[dispatch,product,match]);
  
  return (
    <div className='productscreen1'>
      <Navbar click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
        
        <div className='productscreen'>
        <div className='productscreen__left'>
          <div className='left__image'>
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
              alt='product name'/>
          </div>

          <div className='left__info'>
            <p className='left__name'>Product 1</p>
            <p>Price : $499.99</p>
            <p>Description : lorem1adslorem1adslorem1adslorem1ads rem1ads rem1ads rem1ads rem1ads rem1ads rem1ads</p>

          </div>
        </div>

        <div className='productscreen__right'>
          <div className='right__info'> 
            <p>
              Price: <span>$499.99</span>
            </p>
            <p>
              status: <span>In Stock</span>
            </p>
            <p>
              Qty
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </p>
            <p>
              <button type='button'>Add To Cart</button>
            </p>
          </div>
        </div>

        </div>
    </div>
  )
}

export default ProductScreen
