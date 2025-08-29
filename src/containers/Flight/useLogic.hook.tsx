/* Global Imports */
// Add any necessary imports here


/* Application Imports */
// Add any necessary imports here

/* Local Imports */
import { useEffect, useState } from "react";
import { FlightLogic } from "./Flight.types";
import { FlightDisplay, FlightModel } from "@/types/flight.model";


const getFlights = async () => {
    const response = await fetch('http://localhost:5050/flights');
    const data: FlightModel[] = await response.json();
    return data;
}

const toFlightDisplay = (flight:FlightModel):FlightDisplay => ({
    id: flight.id,
    flight_date: flight.flight_date,
    flight_status: flight.flight_status,
    gate: flight.departure.gate,
    destination: flight.arrival.airport,
    number: flight.flight.number.padStart(4, '0'),
    airline: flight.airline.iata || flight.airline.icao
});

const batchToFlightDisplay = (flights:FlightModel[]):FlightDisplay[] => {
    return flights.map(toFlightDisplay);
}


export const useLogic = ():FlightLogic => {

    const [flights, setFlights] = useState<FlightDisplay[]>([]);

    
    useEffect(() => {
        getFlights().then(batchToFlightDisplay).then(setFlights);
    }, []);


    useEffect(() => {
        console.log(flights);
    }, []);

    return {
        flights 
    }
}