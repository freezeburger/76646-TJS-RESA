import { useEffect, useState } from "react";
import {ActionType, store} from "@/store/store";


export const useStore = () => {
   const [state, setState] = useState({});

   useEffect(() => {
      return store.subscribe(() => setState(store.getState()));
   }, []);

   return { state, dispatch:store.dispatch, ActionType:ActionType };

}