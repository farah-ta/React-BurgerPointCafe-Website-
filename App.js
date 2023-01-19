import './App.css';
import Navbar from './component/navbar';
import Home from "./Pages/home"
import Menu from './Pages/menu';
import About from './Pages/About';
import Footer from "./component/footer";
import {BrowserRouter, Route, Routes} from "react-router-dom"; 


function App() {
  

return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
<Routes>
<Route exact path='/' element={<Home/>} />
<Route exact path='/about' element={<About/>} />
<Route exact path='/menu' element={<Menu/>} />       
</Routes>
      </BrowserRouter>    
      
      <Footer/>
    </div>
  );
}


export default App;
