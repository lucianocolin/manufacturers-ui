export interface IManufacturersResponse {
  country: string;
  commonName: string;
  legalName: string;
  vehicleTypes: VehicleNames[];
}

export interface VehicleNames {
  name: string;
}
