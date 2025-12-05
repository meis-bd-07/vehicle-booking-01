import { Platform, Pressable, StatusBar } from 'react-native';
import React, { useCallback, useImperativeHandle } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import CustomStatusBar from '@components/status-bar/index.component';
import styles from './styles';
import { IBottomSheetProps, IBottomSheetRefProps } from './interface';
import { SCREEN_HEIGHT } from '@assets/ts/core.data';
import { globalStyles } from '@assets/styles/global.style.asset';
import { runOnJS } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

let MAX_TRANSLATE_Y = -SCREEN_HEIGHT;

const BottomSheet = React.forwardRef<IBottomSheetRefProps, IBottomSheetProps>(
  ({ 
    children,
    fullHeight = false,
    refreshAction = false,
    hasBackdrop = true,
    onBackdropPress,
    fixedHeader,
    showGesture = true,
    onGestureStart,
    footer
  }, ref) => {
    const insets = useSafeAreaInsets();
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);

    // ------------------------------
    // HEIGHT CALCULATION
    // ------------------------------
    const statusBarHeight = (Platform.OS === 'android' ? (StatusBar.currentHeight || 34) : insets.top) + 10;
    const FULL_HEIGHT = fullHeight ? -(SCREEN_HEIGHT - statusBarHeight) : -SCREEN_HEIGHT * 0.9;

    // ------------------------------
    // IMPERATIVE HANDLE
    // ------------------------------

    const scrollTo = useCallback((destination: number) => {
      'worklet';
      active.value = destination !== 0;

      // translateY.value = withSpring(destination, { 
      //   damping: 32,
      //   stiffness: 600,
      //   overshootClamping: true 
      // });

      translateY.value = withTiming(destination, {
        duration: 100,
      });
    }, [active, translateY]);
    const scrollToFullHeight = useCallback(() => {
      scrollTo(MAX_TRANSLATE_Y);
    }, [scrollTo]);

    const isActive = useCallback(() => {
      return active.value;
    }, [active.value]);

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
      scrollTo,
      isActive,
    ]);

    // ------------------------------
    // GESTURE HANDLER
    // ------------------------------
    const context = useSharedValue({ y: 0 });
    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = { y: translateY.value };
        if(onGestureStart){
          runOnJS(onGestureStart)()
        }
      })
      .onUpdate((event) => {
        const isAtFullHeight = translateY.value <= FULL_HEIGHT + 20;

        if (refreshAction && fullHeight && isAtFullHeight) {
          if (event.translationY > 0) return;
        }

        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      })
      .onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 3) {
          scrollTo(0);
          runOnJS(onBackdropPress)();
        } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
          scrollTo(MAX_TRANSLATE_Y);
        }
      });
      /* 
      .simultaneousWithExternalGesture()
      .blocksExternalGesture() */

    // ------------------------------
    // ANIMATED STYLE
    // ------------------------------
    const rBottomSheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [25, 5],
        Extrapolate.CLAMP
      );

      const paddingTop = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [0, statusBarHeight],
        Extrapolate.CLAMP
      );

      return {
        paddingTop,
        borderRadius,
        transform: [{ translateY: translateY.value }],
      };
    });

    // ------------------------------
    // BACKDROP STYLE
    // ------------------------------
    const rBackdropStyle = useAnimatedStyle(() => {
      const opacity = interpolate(
        translateY.value,
        [0, FULL_HEIGHT],
        [0, 0.5],
        Extrapolate.CLAMP
      );

      return {
        opacity,
        display: translateY.value <= MAX_TRANSLATE_Y ? 'none' : 'flex'
      };
    });

    const rGestureStyle = useAnimatedStyle(() => {
      const height = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [3, 0],
        Extrapolate.CLAMP
      );
      const marginVertical = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [15, 0],
        Extrapolate.CLAMP
      );
      return {height, marginVertical};
    });

    /* TODO: do some stuff for Keyboard.addListener('keyboardDidShow' | 'keyboardDidHide', () => {}) */

    return (
      <>
        {/* BACKDROP */}
        {hasBackdrop && (
          <Animated.View
            pointerEvents="auto"
            style={[styles.backdrop, rBackdropStyle]}
          >
            <Pressable
              style={globalStyles.flex1}
              onPress={() => {
                if (onBackdropPress) onBackdropPress();
              }}
            />
          </Animated.View>
        )}
        <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
          <CustomStatusBar barStyle='dark-content' showHeader={false} />
          <GestureDetector gesture={gesture}>
            <Animated.View>
            {showGesture && <Animated.View style={[styles.line, rGestureStyle]} />}
            {fixedHeader}
            </Animated.View>
          </GestureDetector>
          {children}
        </Animated.View>
        {footer && footer(scrollToFullHeight)}
      </>
    );
  }
);

export default BottomSheet;