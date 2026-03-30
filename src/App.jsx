import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CounterPage from "./pages/CounterPage";
import PokemonPage from "./pages/PokemonPage";
import WeddingPage from "./pages/WeddingPage";

export default function App() {
  return (
   <Router> 

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/pokemon" element={<PokemonPage />} />
      <Route path="/wedding" element={<WeddingPage />} />
      
    </Routes>
   </Router>
   
  );
}