
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Books from './Pages/Books';
import AddBooks from './Pages/AddBooks';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/books" element={<Books />}></Route>
        <Route exact path="/addBooks" element={<AddBooks />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
