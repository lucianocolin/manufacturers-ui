import type { VehicleNames } from "../../interfaces/manufacturers/IManufacturers";

interface ICardProps {
  country: string;
  commonName: string;
  legalName: string;
  vehicleTypes: VehicleNames[];
}

const Card = ({ country, commonName, legalName, vehicleTypes }: ICardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h5 className="text-xl font-semibold text-gray-800 mb-2">{commonName}</h5>
      <p className="text-gray-600">
        <span className="font-bold">Legal Name:</span> {legalName}
      </p>
      <p className="text-gray-600">
        <span className="font-bold">Country:</span> {country}
      </p>
      <p className="text-gray-600">
        <span className="font-bold">Vehicle Types:</span>{" "}
        {vehicleTypes.map((vehicleType) => vehicleType.name).join(", ")}
      </p>
    </div>
  );
};

export default Card;
