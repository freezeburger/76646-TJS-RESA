/* Global Imports */
import { FC, useState } from 'react';
import styled from '@emotion/styled';

/* Application Imports */
// import * as UI from '@/components';
import * as Hooks from '@/hooks';

/* Local Imports */
import './Flight.style.css';
import { FlightProps } from './Flight.types';
import { FlightDisplay } from '@/types/flight.model';


const getAirlineLogo = (code: FlightDisplay['airline']) => {
   return `https://content.airhex.com/content/logos/airlines_${code}_350_100_r.png`;
}


type FormInputs = {
   flightNumber: string;
}


const FlightCard = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   text-transform: uppercase;
   border-bottom: 1px solid black;
   
   &:nth-child(odd){
      background-color: lightgray;
   }

   img{
      transform: scale(0.65);
   }
`;

const FlightRenderer: FC<{ flight: FlightDisplay }> = ({ flight }) => {
   return (
      <FlightCard>
         <div>{flight.airline} {flight.number}</div>
         <div>{flight.flight_status}</div>
         <div>{flight.gate}</div>
         <img
            src={getAirlineLogo(flight.airline)}
            alt={`${flight.airline} logo`}
            onError={(e) => {
               (e.target as HTMLImageElement).src = getAirlineLogo('XX');
            }}
         />
         <div>{flight.destination}</div>
         <div>{flight.flight_date}</div>
      </FlightCard>
   )
}

const Flight: FC<FlightProps> = ({ logic }) => {

   /**
    * @see https://react-hook-form.com/get-started
    */
   const {
      register,
      handleSubmit,
      watch,
      getValues,
      formState: { errors },
   } = Hooks.useForm<FormInputs>();

   const onSubmit = (data: FormInputs) => null;

 

   return (
      <>

         <div className="Flight" data-testid="Flight">
            
            <form onSubmit={handleSubmit(onSubmit)}>
               <input {...register("flightNumber")} />
               <input type="submit" />
            </form>

            <hr />
            <FlightRenderer flight={
               {
                  id: 'id',
                  airline: '',
                  number: 'number',
                  flight_status: null,
                  gate: 'GATE',
                  destination: 'Destination',
                  flight_date: 'Date'
               }
            } />

            {logic.flights
                  .filter(flight => getValues('flightNumber') ? flight.number.startsWith(getValues('flightNumber')) : true)
                  .map(
                     (flight, index) => <FlightRenderer key={index} flight={flight} />
               )
            }

         </div>
      </>
   )
};

export default Flight;
