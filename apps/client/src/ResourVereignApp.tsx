import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import NotSignedInGuard from './guards/NotSignedInGuard';
import SignedInGuard from './guards/SignedInGuard';
import DefaultLayout from './layouts/DefaultLayout';
import HeadlessLayout from './layouts/HeadlessLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SignInPage from './pages/SignInPage';
import routes from './shared/routes';

function ResourVereignApp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={routes.home} element={<SignedInGuard redirectTo={routes.signIn} />}>
          <Route path="" element={<DefaultLayout />}>
            <Route path="" element={<HomePage />} />
          </Route>
        </Route>
        <Route path={routes.signIn} element={<NotSignedInGuard />}>
          <Route path="" element={<HeadlessLayout />}>
            <Route path="" element={<SignInPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage homeTo={routes.home} />} />
      </Routes>
    </Suspense>
  );
}

export default ResourVereignApp;
