import { Routes, Route } from 'react-router-dom';
import Navbar from  './Components/Navbar';
import Home from './Components/Home';
import './global.css';
function App() {
  return (
   <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>

   </>
  );
}
export default App;
