import './App.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Cart from './Pages/Cart/Cart';
import Shop from './Pages/Shop/Shop';
import Nav from './Components/Nav';
import { ShopContextProvider } from './Context/ShopContext';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <BrowserRouter>
       <Nav/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
