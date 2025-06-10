/* Global Imports */
import { FC } from 'react';

/* Application Imports */
// import * as UI from '@/components';
import * as Hooks from '@/hooks';

/* Local Imports */
import './TemplateName.style.css';
import { TemplateNameProps } from './TemplateName.types';

type FormInputs = {
   example: string
   exampleRequired: string
 }

const TemplateName: FC<TemplateNameProps> = ({logic}) => {

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
         <div className="TemplateName" data-testid="TemplateName">
            
            TemplateName Component

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

export default TemplateName;
