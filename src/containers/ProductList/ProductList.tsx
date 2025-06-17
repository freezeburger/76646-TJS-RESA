/* Global Imports */
import { FC } from 'react';

/* Application Imports */
// import * as UI from '@/components';
import * as Hooks from '@/hooks';

/* Local Imports */
import './ProductList.style.css';
import { ProductListProps } from './ProductList.types';

type FormInputs = {
   example: string
   exampleRequired: string
 }

const ProductList: FC<ProductListProps> = ({logic}) => {

   /**
    * @see https://react-hook-form.com/get-started
    */
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = Hooks.useForm<FormInputs>();

   const onSubmit = (data: FormInputs) => {
      console.log(data);
   }
   return (
      <>
         <div className="ProductList" data-testid="ProductList">
            
            ProductList Component

            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
               
               {/* register your input into the hook by invoking the "register" function */}
               <input defaultValue="test" {...register("example")} />

               {/* include validation with required or other standard HTML validation rules */}
               <input {...register("exampleRequired", { required: true })} />
               
               {/* errors will return when field validation fails  */}
               {errors.exampleRequired && <span>This field is required</span>}
               
               <input type="submit" />
            </form>
         </div>
      </>
   )
};

export default ProductList;
