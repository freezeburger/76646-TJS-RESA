import { WithUniqueId } from "./generic.types"

export interface FlightDisplay extends Pick<FlightModel, 'flight_date' | 'flight_status' | 'id' > {
    gate: FlightModel['departure']['gate'];
    destination: FlightModel['arrival']['airport'];
    number: FlightModel['flight']['number'];
    airline: FlightModel['airline']['iata' | 'icao'];
}

export interface FlightModel extends WithUniqueId {
  flight_date: string
  flight_status: "scheduled" |"landed" | "cancelled" | null
  departure: Location
  arrival: Location
  airline: Airline
  flight: Flight
  aircraft: null
  live: null
}

export interface Location {
  airport: string
  timezone: string
  iata: string
  icao: string
  terminal: string
  gate: string
  delay: number
  scheduled: string
  estimated: string
  actual: string
  estimated_runway: string
  actual_runway: string
}


export interface Airline {
  name: string
  iata: string
  icao: string
}

export interface Flight extends Pick<Airline, 'iata' | 'icao'> {
  number: string
  codeshared: any
}
