// import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from "./Pages/Home/Home"
import Navbar from './components/Navbar/Navbar';
import Atlas from './Pages/Atlas/Atlas';
import View from "./Pages/View/View"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact="true" path="/" element={<Home/>} />
          <Route exact="true" path="/atlas" element={<Atlas/>} />
          <Route exact="true" path="/tests" element={<Atlas/>} />
          <Route exact="true" path="/view" element={<View/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
