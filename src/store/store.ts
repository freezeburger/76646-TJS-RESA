import { FlightModel } from "@/types/flight.model";
import { configureStore } from "@reduxjs/toolkit";


const initialState:{flights: FlightModel[]} = {
   flights: []
};

export enum ActionType {
    FLIGHT_UPDATE = 'FLIGHT_UPDATE',
    NOTIFICATION_CREATION = 'NOTIFICATION_CREATION'
}

const reducer = (
    state = initialState,
    action: { type: ActionType; payload: any }
    ) => {
    switch (action.type) {
        case ActionType.FLIGHT_UPDATE:
            return { ...state, flights: action.payload };
        default:
            return state;
    }
}

const middleware = (store: any) => (next: any) => (action: any) => {
    console.log({action})
    return next(action);
}

export const store = configureStore({
    preloadedState: initialState,
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
});