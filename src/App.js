import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "../src/pages/Home.jsx";
import About from "../src/pages/About";
import Lp from "./pages/Lp";
import SingleBlog from "../src/pages/SingleBlog";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/lp" element={<Lp />}></Route>
        <Route path="/single-blog/:id" element={<SingleBlog />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
