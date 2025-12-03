import { createNavigationContainerRef, StackActions, useNavigation } from '@react-navigation/native';
import { IAppNavigatorProp, RouteType } from '@type/routes/route-types';

export const navigationRef = createNavigationContainerRef();
export const useAppNavigation = () => useNavigation<IAppNavigatorProp>();

export class Navigation {
  static push(name: RouteType, params?: object) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.push(name, params));
    }
  }

  static reset(routeName: RouteType, params?: object) {
    if (navigationRef.isReady()) {
      navigationRef.reset({index: 0, routes: [{name: routeName, params}]});
    }
  }

  static pop() {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
      navigationRef.dispatch(StackActions.pop());
    }
  }

  static navigate<T = any>(name: RouteType, params?: T) {
    if (navigationRef.isReady()) {
      // @ts-ignore
      navigationRef.navigate(name, params);
    }
  }

  static back() {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
      navigationRef.goBack();
    }
  }

  static replace(name: RouteType, params?: object) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.replace(name, params));
    }
  }
}
