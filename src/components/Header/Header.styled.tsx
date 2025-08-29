import styled from '@emotion/styled';

import { UISize } from '@/types/ui.types';

const getSizeHeight = ({size}: UISize) => {
   switch(size) {
      case 'small':
         return '5vh';
      case 'medium':
         return '7.5vh';
      case 'large':
         return '10vh';
      default:
         return '7.5vh';
   }
}

export const HeaderWrapper = styled.div<UISize>`
   padding: 10px; 
   margin: 10px 10px;
   height: ${ getSizeHeight };
   background-color: rgba(140, 193, 247, 1);
   font-size: 1.2em;
   font-weight: bold;
`;
