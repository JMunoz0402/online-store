import './App.css';
import Navbar from "./components/navbar.jsx";
import Footer from './components/footer.jsx';
import Catalog from './pages/catalog.jsx';
import About from './pages/about.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App(){
  return(
    <div className='App'>
      <Navbar></Navbar>
      <div className='content'>
        <h1>Hello World React!</h1>
      </div>
      <Catalog></Catalog>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

