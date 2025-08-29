import React, { Suspense } from 'react';
import { NotificationsProps } from './Notifications.types';

const LazyNotifications =  React.lazy(() => import('./Notifications'));

/**
 * USAGE: Notifications description to complete.
 * @example
 * <Notifications /> 
 */
const Notifications = (props: JSX.IntrinsicAttributes & NotificationsProps) => (
  <Suspense fallback={null}>
    <LazyNotifications {...props} />
  </Suspense>
);
Notifications.displayName = 'Notifications Lazy Loaded';

export default Notifications;
