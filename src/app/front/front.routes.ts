import { Routes } from '@angular/router';

import { HomePage } from './pages/home/home';
import { PlansPage } from './pages/plans/plans';
import { AboutPage } from './pages/about/about';
import { ContactPage } from './pages/contact/contact';
import { CoveragePage } from './pages/coverage/coverage';
import { UserLoginPage } from './pages/user-login/user-login';
import { FrontLayout } from './layouts/front-layout/front-layout';

export const FrontRoutes: Routes = [
  {
    path: '',
    component: FrontLayout,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'planes',
        component: PlansPage,
      },
      {
        path: 'cobertura',
        component: CoveragePage,
      },
      {
        path: 'nosotros',
        component: AboutPage,
      },
      {
        path: 'contacto',
        component: ContactPage,
      },
      {
        path: 'login',
        component: UserLoginPage,
      },
    ],
  },
];

export default FrontRoutes;
