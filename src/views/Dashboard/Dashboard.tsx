/* Global Imports */
import  { FC } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Features from '@/containers';
import * as Hooks from '@/hooks';

/* Local Imports */
import './Dashboard.style.css';


interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {

   Hooks.useDocumentTitle('Dashboard View');

   return (
   <div className="Dashboard" data-testid="Dashboard">
      <UI.Header>Dashboard</UI.Header>
      <UI.Main>Dashboard Content</UI.Main>
      <UI.Footer />
   </div>
   )
};

export default Dashboard;
