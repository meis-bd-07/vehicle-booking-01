import Bidding from '@bidding_modules/screens/bidding-screen';
import { screens } from '@screenName';
import { IRouteProps } from '@type/routes/route-types';

const biddingRoutes: Array<IRouteProps> = [
  { accessLabel: 0, component: Bidding, isHide: false, name: screens.bidding },
];

export default biddingRoutes;
