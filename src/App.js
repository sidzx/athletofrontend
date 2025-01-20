
import './App.css';
import Bar from './components/Bar';
import Body from './components/Body';
import Login from './components/Login';
import Signup from './components/Signup';
import { Routes,Route } from 'react-router-dom';
import User from './components/User';
import Admindash from './components/Admindash';
import { useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Viewuser from './components/Viewuser';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import EditAdminProfile from './components/EditAdminProfile';
import Addproduct from './components/Addproduct';
import Editproduct from './components/Editproduct';
import Viewproduct from './components/Viewproduct';
import Footer from './components/Footer';
import { Userview } from './services/allapi';
import { Collections } from '@mui/icons-material';
import Products from './components/Products';
import Wishlist from './components/Wishlist';
import Addtocart from './components/Addtocart';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Afterpay from './components/Afterpay';
import Stripe from './components/Stripe';
import Vieworders from './components/Vieworders';
import Dashboard from './components/Dashboard';
import { ToastContainer } from 'react-toastify';


function App() {
  const locate=useLocation()

  
  return (
    <div className="App">
        
        {/* {
        locate.pathname !== '/admin' && <Bar />
      }  */}
      {!['/admin', '/viewusers','/editAdmin','/addproduct','/viewproduct','/editproduct','/collection','/products','/user','/vieworder','/dashboard'].includes(locate.pathname) && (
  <>
    <Bar />
    {/* <Navbar />
    <Footer /> */}
  </>
)}

      {/* {
        locate.pathname ==  '/viewusers' && <Admindash />
      } */}
     <ToastContainer/>
      <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/user" element={<User/>}/>
    
      
      <Route path='/admin' element={<Admindash/>}/>
  
      <Route path="/side" element={<Sidebar/>}/>
      <Route path='/viewusers' element={<Viewuser/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/reset' element={<ResetPassword/>}/>
      <Route path='/editAdmin' element={<EditAdminProfile/>}/>
      <Route path="/addproduct" element={<Addproduct/>}/>
      <Route path="/editproduct" element={<Editproduct/>}/>
      <Route path="/viewproduct" element={<Viewproduct/>}/>
      <Route path="/collections" element={<Collections/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      {/* <Route path="/user" element={<Userview/>}/> */}
      <Route path='/addtocart' element={<Addtocart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/afterpay" element={<Afterpay/>}/>
      <Route path="/stripe" element={<Stripe/>}/>
      <Route path="/vieworder" element={<Vieworders/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

      </Routes>
      <Footer/>      
    </div>
  );
}

export default App;
