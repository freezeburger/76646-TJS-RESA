import React, { Suspense } from 'react';

const LazyDashboard = React.lazy(() => import('./Dashboard'));

/**
 * USAGE: Dashboard description to complete.
 * @example
 * <Dashboard /> 
 */
const Dashboard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDashboard {...props} />
  </Suspense>
);
Dashboard.displayName = 'Dashboard Lazy Loaded';

export default Dashboard;
