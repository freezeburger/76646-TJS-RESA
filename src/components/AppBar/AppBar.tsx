/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { AppBarWrapper } from './AppBar.styled';

import QRCODE from '/assets/qr.png';


interface AppBarProps { }


const AppBar: FC<AppBarProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <AppBarWrapper data-testid="AppBar">
      <img 
         src="https://resa.aero/wp-content/uploads/2023/03/logo-resa-bleu-2x.webp" 
         alt="App Logo"  />

      <img src={QRCODE} alt="QR Code" height="150"/>
   </AppBarWrapper>
   );

}

/**
 * USAGE: AppBar description to complete.
 * @example
 * <AppBar /> 
 */
const AppBarMemo = React.memo(AppBar, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
AppBarMemo.displayName = 'AppBar Memoized';

export default AppBarMemo;
