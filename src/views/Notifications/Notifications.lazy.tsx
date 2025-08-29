import React, { Suspense } from 'react';

const LazyNotifications = React.lazy(() => import('./Notifications'));

/**
 * USAGE: Notifications description to complete.
 * @example
 * <Notifications /> 
 */
const Notifications = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNotifications {...props} />
  </Suspense>
);
Notifications.displayName = 'Notifications Lazy Loaded';

export default Notifications;
