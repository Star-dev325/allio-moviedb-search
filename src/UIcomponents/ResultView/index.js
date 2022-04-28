import React, { Suspense, lazy } from 'react';

import { Title, Sector } from './styles';

const ActorsView = lazy(() => import('../ActorsView'));
const MovieList = lazy(() => import('../MovieList'));

export default () => (
  <Sector>
    <Suspense fallback={<h3>Just a second...</h3>} >
      <ActorsView />
    </Suspense>
    <Title>MOVIES:</Title>
    <Suspense fallback={<h3>Just a second...</h3>}>
      <MovieList />
    </Suspense>
  </Sector>
);
