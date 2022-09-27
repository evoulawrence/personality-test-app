import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from "./pages/Home/Home";
import PersonalityTest from "./pages/PersonalityTest/PersonalityTest";
import Result from "./pages/Result/Result";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="mainSection">
      <Router>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/personality-test"
              element={<PersonalityTest />}
            />
            <Route
              path="/result"
              element={<Result /> }
            />
          </Routes>
      </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
