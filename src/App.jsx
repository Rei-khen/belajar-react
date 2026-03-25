import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CounterPage from "./pages/CounterPage";

export default function App() {
  return (
   <Router> 

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/counter" element={<CounterPage />} />
    </Routes>
   </Router>
   
  );
}