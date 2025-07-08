import { useQuery } from "@tanstack/react-query";
import { api } from "../../config/axios";
import type { IManufacturersResponse } from "../../interfaces/manufacturers/IManufacturers";

export function useGetManufacturers() {
  return useQuery({
    queryKey: ["manufacturers"],
    queryFn: async () => {
      const { data: response } = await api.get<IManufacturersResponse[]>(
        "/manufacturers"
      );

      console.log("response", response);

      return response;
    },
  });
}
