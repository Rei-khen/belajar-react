import { useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";
import PokemonDisplay from "../components/PokemonDisplay";

export default function PokemonPage() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if(!search) return;

    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`).then((res) =>{
      if(!res.ok) throw new Error("pokemon tidak ditemukan")
        return res.json()
    }).then((data)=> {
      setPokemon(data)
      setLoading(false);
    }).catch((err) =>{{
      alert(err.message)
      setPokemon(null)
      setLoading(false);
    }})
  }

  return (
    <div
      className="display"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
        // backgroundColor: "blue",
      }}
    >
      <h1 style={{marginBottom : "10px"}}>pokemon</h1>
      <div
        className="searchBar"
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)", // Shadow tipis
          padding: "4px",
        }}
      >
        <input
          type="text"
          placeholder="Cari nama pokemon..."
          style={{
            width: "350px",
            padding: "12px 16px",
            border: "none",
            outline: "none", // Menghapus garis biru saat diklik
            fontSize: "16px",
          }} value={search} onKeyDown={(e) => e.key === "enter" && handleSearch()}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#ef5350", // Merah khas Pokedex
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background 0.3s",
          }}
          onClick={handleSearch}
        >
          {loading ? "mencari..." : "cari"}
        </button>
      </div>

      <PokemonDisplay data={pokemon} />
    </div>
  );
}
