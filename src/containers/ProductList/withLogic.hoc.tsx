/* Global Imports */
import { FC } from 'react';

/* Application Imports */
// Add any necessary imports here

/* Local Imports */
import { ProductListProps } from './ProductList.types';
import { useLogic } from "./useLogic.hook";

export const withLogic = (Component:FC<ProductListProps>) => {

    return (props:object) => {
        const logic = useLogic();
        return <Component logic={logic} {...props}/>
    }
}