import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/about" element={<About />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
