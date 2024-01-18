import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Aside } from "./components/Aside";
import Student from "./components/Student";
// import { getAllStudents } from "./api/fetch";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path=":id" element={<Student />} />
        </Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
