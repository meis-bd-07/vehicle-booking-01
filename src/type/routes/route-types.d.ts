import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { bottomTabScreens, screens } from "@routes/routeName.route";

export type RouteType =  typeof screens[keyof typeof screens]
export type IAppNavigatorProp = NativeStackNavigationProp<RootStackParamList>;

export interface IRouteProps {
  name: string;
  component: React.ComponentType<any>;
  title?: string;
  isLazy?: boolean;
  isHide: boolean;
  accessLabel: number | string;
}

export type RootStackParamList = {
  [screens.splash]: undefined;
  [screens.authStack]: { screen: keyof AuthStackParamList };
  [screens.homeStack]: { screen: keyof TabsParamList };
  [screens.webView]: undefined;
  /* other screen here */
  /* profile, setting, activity-log, notification, forget-pass-private, otp-verification-private */
};

export type AuthStackParamList = {
  [screens.login]: undefined;
  [screens.registration]: undefined;
  [screens.forgetPassword]: undefined;
  [screens.otpVerification]: undefined;
  [screens.socialLogin]: undefined;
  [screens.termCondition]: undefined;
  [screens.privacyPolicy]: undefined;
};

export type TabsParamList = {
  [bottomTabScreens.menu]: undefined;
  [bottomTabScreens.add]: undefined;
  [bottomTabScreens.setting]: undefined;
  [bottomTabScreens.inbox]: undefined;
  [bottomTabScreens.dashboard]: undefined;
  [bottomTabScreens.cardView]: undefined;
  [bottomTabScreens.calendar]: undefined;
  [bottomTabScreens.task]: undefined;
  [bottomTabScreens.pipeline]: undefined;
  [bottomTabScreens.contact]: undefined;
  [bottomTabScreens.campaign]: undefined;
};

export type IRootScreenName = keyof RootStackParamList;
export type IAuthScreenName = keyof AuthStackParamList;
export type ITabScreenName = keyof TabsParamList;
