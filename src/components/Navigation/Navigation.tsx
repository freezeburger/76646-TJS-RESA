/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { NavigationWrapper } from './Navigation.styled';
import { Link } from 'react-router';

interface NavigationProps { }

const Navigation: FC<NavigationProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return (
      <NavigationWrapper data-testid="Navigation">
         <div>
            <Link to="/">Home</Link>
            <Link to="/flights">Flights</Link>
            <Link to="/notifications">Notifications</Link>
            <Link to="/dashboard">Dashboard</Link>
         </div>
      </NavigationWrapper>
   );

}

/**
 * USAGE: Navigation description to complete.
 * @example
 * <Navigation /> 
 */
const NavigationMemo = React.memo(Navigation, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
NavigationMemo.displayName = 'Navigation Memoized';

export default NavigationMemo;
