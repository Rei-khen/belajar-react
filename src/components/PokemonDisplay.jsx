export default function PokemonDisplay({ data }) {
  if (!data) return null;

  return (
    <div style={{
      marginTop: "30px",
      padding: "20px",
      borderRadius: "15px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      width: "300px",
      textAlign: "center"
    }}>
      {/* Mengambil gambar official artwork agar lebih jernih */}
      <img 
        src={data.sprites.other["official-artwork"].front_default} 
        alt={data.name} 
        style={{ width: "180px", marginBottom: "10px" }} 
      />
      
      <h2 style={{ textTransform: "capitalize", margin: "10px 0", color: "#333" }}>
        {data.name} <span style={{ color: "#888", fontSize: "0.8em" }}>#{data.id}</span>
      </h2>

      {/* Menampilkan Types (Array) */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "15px" }}>
        {data.types.map((t) => (
          <span key={t.slot} style={{
            padding: "5px 12px",
            borderRadius: "20px",
            backgroundColor: "#4caf50", // Kamu bisa buat dinamis berdasarkan warna tipe
            color: "white",
            fontSize: "12px",
            fontWeight: "bold"
          }}>
            {t.type.name.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Menampilkan Abilities (Array) */}
      <div style={{ textAlign: "left", fontSize: "14px" }}>
        <strong>Abilities:</strong>
        <ul style={{ paddingLeft: "20px", margin: "5px 0" }}>
          {data.abilities.map((a, index) => (
            <li key={index} style={{ textTransform: "capitalize" }}>
              {a.ability.name} {a.is_hidden && "(Hidden)"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}