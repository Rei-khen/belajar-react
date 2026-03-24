import "../style-components/Card.css";
import iconCheck from "../assets/circle-check-solid-full.svg";

export default function PriceCard({
  jenis,
  harga,
  listFeature,
  featureDesc = "lorem ipsum dolor",
}) {
  return (
    <div id="card">
      <p>{jenis}</p>
      <p>
        <span>{harga}</span> per month
      </p>
      <button
        style={{
          width: "100%",
          height: "40px",
          borderRadius: "10px",
          borderStyle: "none",
          backgroundColor: "#64b5f6",
          fontWeight: "bold",
          fontSize: "16px",
          color: "white",
        }}
      >
        Getting started
      </button>
      <hr
        style={{
          margin: "18px 0",
          border: "none", // 1. Hapus border bawaan browser
          height: "2px", // 2. Tentukan ketebalan
          backgroundColor: "rgba(0, 0, 0, 0.5)", // 3. Hitam dengan opacity 0.5
        }}
      />
      <p
        style={{
          marginTop: "20px",
          lineHeight: "normal",
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        Features
      </p>
      <p style={{ margin: "0" }}>{featureDesc}</p>
      <ul style={{ marginTop: "20px" }}>
        {listFeature.map((list) => {
          return (
            <li>
              <img src={iconCheck} alt="" />
              {list}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
