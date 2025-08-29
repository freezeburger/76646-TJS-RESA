/* Global Imports */
import React, { Children, FC, PropsWithChildren, useCallback, useState } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { MainWrapper } from './Main.styled';


interface MainProps { }


const Main: FC<PropsWithChildren<MainProps>> = ({children}) => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));


   return(
   <MainWrapper data-testid="Main">
      {children}
   </MainWrapper>
   );

}

/**
 * USAGE: Main description to complete.
 * @example
 * <Main /> 
 */
const MainMemo = React.memo(Main, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
MainMemo.displayName = 'Main Memoized';

export default MainMemo;
