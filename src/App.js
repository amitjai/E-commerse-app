import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from './Component/Navbar/Navigation';
import Error from './Component/Error/Error';
import Footer from './Component/Footer/Footer';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import men_banners from './assets/banner_mens.png';
import woman_banners from './assets/banner_women.png';
import kids_banners from './assets/banner_kids.png';

function App() {

  return (
    <div className="app">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory category='men' banner={men_banners} />} />
            <Route path='/womens' element={<ShopCategory category='women' banner={woman_banners}/>}/>
            <Route path='/kids' element={<ShopCategory category='kid' banner={kids_banners} />}/>
            <Route path='/login' element={<LoginSignup />} />
            <Route path='/product' element={<Product />}>
              <Route path=':productId' element={<Product />}/>
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
