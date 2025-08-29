/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { ButtonWrapper } from './Button.styled';


interface ButtonProps { }


const Button: FC<ButtonProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <ButtonWrapper data-testid="Button">
      Button Component
   </ButtonWrapper>
   );

}

/**
 * USAGE: Button description to complete.
 * @example
 * <Button /> 
 */
const ButtonMemo = React.memo(Button, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
ButtonMemo.displayName = 'Button Memoized';

export default ButtonMemo;
