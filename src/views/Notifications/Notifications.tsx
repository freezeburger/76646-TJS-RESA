/* Global Imports */
import  { FC } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Features from '@/containers';
import * as Hooks from '@/hooks';

/* Local Imports */
import './Notifications.style.css';


interface NotificationsProps {}

const Notifications: FC<NotificationsProps> = () => {

   Hooks.useDocumentTitle('Notifications View');

   const { state } = Hooks.useStore();

   return (
   <div className="Notifications" data-testid="Notifications">
      <UI.Header size='small'>Notifications</UI.Header>
      <UI.Main>

      <h1> There are {state.flights.length} active</h1>

      </UI.Main>
      <UI.Footer />
   </div>
   )
};

export default Notifications;
