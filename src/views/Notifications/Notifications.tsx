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

   return (
   <div className="Notifications" data-testid="Notifications">
      <UI.Header>Notifications</UI.Header>
      <UI.Main>Notifications Content</UI.Main>
      <UI.Footer />
   </div>
   )
};

export default Notifications;
