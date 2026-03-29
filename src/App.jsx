import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CounterPage from "./pages/CounterPage";
import PokemonPage from "./pages/PokemonPage";

export default function App() {
  return (
   <Router> 

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/pokemon" element={<PokemonPage />} />
    </Routes>
   </Router>
   
  );
}