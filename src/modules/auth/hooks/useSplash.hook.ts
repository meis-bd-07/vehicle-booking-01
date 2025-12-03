import {useEffect, useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNetInfo} from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';
import { screens } from '@routes/routeName.route';
import { hasInternetConnection } from '@packages/net-info/netInfoHandler';
import { config } from '@config';

const useSplash = () => {
  const {bottom} = useSafeAreaInsets();
  config.activityHeight = bottom;
  const navigation = useNavigation<any>();
  const screenName = useRef(screens.bidding);

  /* for internet */
  const {isInternetReachable} = useNetInfo();
  const goToInit = useRef<boolean>(false);
  /* for internet */

  useEffect(() => {
    if (isInternetReachable) {
      if (!goToInit.current) {
        goToInit.current = true;
        initApp();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInternetReachable]);

  const initApp = async () => {
    const interNetFlag = await hasInternetConnection();
    if (!interNetFlag) {
      return;
    }
    setTimeout(() => {
      navigation.replace(screenName.current);
    }, 2000);
  };
  return {};
};
export default useSplash;
