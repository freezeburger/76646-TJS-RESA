/* Global Imports */
import React, { FC, PropsWithChildren } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { HeaderWrapper } from './Header.styled';
import { UISize } from '@/types/ui.types';


interface HeaderProps extends UISize{ 
}


const Header: FC<PropsWithChildren<HeaderProps>> = (props) => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <HeaderWrapper data-testid="Header" {...props}/>
   );

}

/**
 * USAGE: Header description to complete.
 * @example
 * <Header /> 
 */
const HeaderMemo = React.memo(Header, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
HeaderMemo.displayName = 'Header Memoized';

export default HeaderMemo;
