import React, {Suspense} from 'react';
import ErrorBoundary from './ErrorBoundary';
import SuspenseFallback from './SuspenseFallback.fallback';

const Loadable =
  (
    Component: any,
    Fallback = SuspenseFallback,
    error = {
      title: 'Something went wrong.',
      description: 'Fail to load login module',
    },
  ) =>
  (props: any) => {
    return (
      <ErrorBoundary title={error.title} description={error.description}>
        <Suspense fallback={<Fallback />}>
          <Component {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  };

export default Loadable;
