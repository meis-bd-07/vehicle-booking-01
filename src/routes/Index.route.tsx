import React from 'react';
import { screens } from './routeName.route';
import basicRoutes from './modules/basic.routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IRootScreenName, IRouteProps, RootStackParamList } from '@type/routes/route-types';
import biddingRoutes from './modules/bidding.routes';

const RouterIndex = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false, 
        animation: 'fade'
      }}
      initialRouteName={screens.splash}>
        {basicRoutes.map((route: IRouteProps, index: number) => <RootStack.Screen name={route.name as IRootScreenName} component={route.component} key={index} />)}
        {biddingRoutes.map((route: IRouteProps, index: number) => <RootStack.Screen name={route.name as IRootScreenName} component={route.component} key={index} />)}
    </RootStack.Navigator>
  );
};
export default RouterIndex;
