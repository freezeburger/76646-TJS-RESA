import { FlightDisplay } from "@/types/flight.model";

export interface FlightProps {
   logic: FlightLogic;
}

export interface FlightLogic {
  // Add your logic here
  flights: FlightDisplay[];
}