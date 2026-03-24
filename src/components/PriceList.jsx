import PriceCard from "./PriceCard";
import "../style-components/CardContainer.css"

export default function PriceList() {
  return (
    <div id="card-container">
      <PriceCard
        harga="23"
        jenis="Starter"
        listFeature={["gratis ongkir", "original", "matcha", "taro ubi basi"]}
      />

      <PriceCard
        harga="23"
        jenis="Starter"
        listFeature={["gratis ongkir", "original", "matcha", "taro ubi basi"]}
      />

      <PriceCard
        harga="23"
        jenis="Starter"
        listFeature={["gratis ongkir", "original", "matcha", "taro ubi basi"]}
      />
    </div>
  );
}
