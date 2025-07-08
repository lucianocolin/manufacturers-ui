import Card from "../components/common/Card";
import { useGetManufacturers } from "../services/manufacturers/useManufacturers";

function App() {
  const { data: manufacturers } = useGetManufacturers();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-10">
        Car Manufacturers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-4">
        {manufacturers?.map((manufacturer) => (
          <Card
            key={manufacturer.commonName}
            country={manufacturer.country}
            commonName={manufacturer.commonName}
            legalName={manufacturer.legalName}
            vehicleTypes={manufacturer.vehicleTypes}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
