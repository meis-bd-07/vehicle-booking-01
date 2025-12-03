import { globalStyles } from '@assets/styles/global.style.asset';
import NoInternetNotifier from '@components/no-internet/NoInternet.component';
import React from 'react';
import {View} from 'react-native';

const AppWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  /* TODO: do some necessary work here */
  return (
    <View style={globalStyles.relativeContainer}>
      {children}
      <NoInternetNotifier />
    </View>
  );
};
export default AppWrapper;

