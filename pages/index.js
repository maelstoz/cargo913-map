import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const CargoRouteMap = dynamic(() => import("../src/CargoRouteMap"), {
  ssr: false, // чтобы карта корректно отрисовывалась
});

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <CargoRouteMap />
    </div>
  );
}
