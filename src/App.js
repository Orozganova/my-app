
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Shop from './Pages/Shop';

function App() {
  return (
    <div >
      <BrowserRouter/>
<Navbar/>
<Router/>
<Route path='/' element={<Shop/>}/>
<Route path='/mens' element={<ShopCategory caterogy="men"/>}/>
<Route path='womens' element={<ShopCategory caterogy="women"/>}/>
<Route path='womens' element={<ShopCategory caterogy="kid"/>}/>
<Route path="product" element={<Product/>}>
<Route path=':productId' element={<Product/>}/>
</Route>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<LoginSignup/>}/>
<Routes/>
<BrowserRouter/>
    </div>
  );
}

export default App;
