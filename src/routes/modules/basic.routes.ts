import Splash from '@auth_modules/screens/splash-screen';
import { screens } from '@screenName';
import { IRouteProps } from '@type/routes/route-types';

const basicRoutes: Array<IRouteProps> = [
  { accessLabel: 0, component: Splash, isHide: false, name: screens.splash },
];

export default basicRoutes;
