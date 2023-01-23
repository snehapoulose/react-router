import {Routes,Route} from 'react-router-dom'
import { Home } from './components/Home';
import {About } from './components/About';
import { Navbar } from './components/Navbar';
import { Prouct } from './components/Prouct';
import { Shop } from './components/Shop';
import { Electronics } from './components/Electronics';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='product' element={<Prouct/>}>
          <Route path='shop' element={<Shop/>}/>
          <Route path='electronics' element={<Electronics/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
