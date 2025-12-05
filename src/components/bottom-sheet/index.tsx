import {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {BackHandler} from 'react-native';
import useIsMountHook from '@utils/hooks/useIsMount.hook';
import { IBottomSheetRefProps, IBsManagerShow } from './interface';
import BottomSheet from './BottomSheet';

export const bsManager = {
  show: (props: IBsManagerShow) => console.log(props)
}

const BottomSheetIndex = () => {
  const isMount = useIsMountHook();
  const ref = useRef<IBottomSheetRefProps>(null);
  const [isShow, setIsShow] = useState<boolean>(false);
  const reloadRef = useRef<{
    component:React.ReactNode | null;
    propsRef: Omit<IBsManagerShow, 'flag' | 'component'>
  }>(null);
  const componentRef = useRef<React.ReactNode | null>(null);
  const propsRef = useRef<Omit<IBsManagerShow, 'flag' | 'component'>>(null);
  const scrollToRef = useRef<number>(-200)

  const showBottomSheet = useCallback((props: IBsManagerShow) => {
    const {
      flag, component, componentProps, onClose, onOpen, bottomSheetProps, scrollTo = -200
    } = props;

    scrollToRef.current = scrollTo;

    if (flag && isShow) {
      reloadRef.current = {
        component: component,
        propsRef: {componentProps, onClose, onOpen, bottomSheetProps},
      };
      ref?.current?.scrollTo(0);
      scrollToRef.current = -200;
      return;
    }

    if (flag) {
      componentRef.current = component;
      propsRef.current = {componentProps, onClose, onOpen, bottomSheetProps};
      reloadRef.current = null;
      setIsShow(true);
      return;
    }
    setIsShow(false);
    ref?.current?.scrollTo(0);
    scrollToRef.current = -200;
  }, [isShow])

  useLayoutEffect(() => {
    bsManager.show = showBottomSheet
  }, [showBottomSheet])

  useEffect(() => {
    if (!isMount) return;
    if (isShow) {
      ref?.current?.scrollTo(scrollToRef.current);
      if (propsRef?.current?.onOpen) {
        propsRef.current.onOpen();
      }
    } else {
      if (reloadRef.current) {
        componentRef.current = reloadRef.current.component;
        propsRef.current = {...reloadRef.current.propsRef};
        reloadRef.current = null;
        setIsShow(true);
        if (propsRef?.current?.onOpen) {
          propsRef.current.onOpen();
        }
        return;
      }
      componentRef.current = null;
      propsRef.current = null;
      reloadRef.current = null;
    }

    /* backHandler for android */
    const backAction = () => {
      if (propsRef?.current?.onClose) {
        showBottomSheet({flag: false});
        return true;
      } else {
        return false;
      }
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [isMount, isShow, showBottomSheet]);

  const backDropHandler = () => {
    setIsShow(false);
    if (propsRef?.current?.onClose) {
      propsRef.current.onClose();
    }
  };
  if (!isShow) return null;
  return (
    <BottomSheet
      ref={ref}
      onBackdropPress={backDropHandler}
      {...propsRef.current?.bottomSheetProps}
    >{componentRef.current ? componentRef.current: <></>}</BottomSheet>
  );
};
export default BottomSheetIndex;
