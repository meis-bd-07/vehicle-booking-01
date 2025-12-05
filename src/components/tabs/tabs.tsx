import rs from '@assets/styles/responsiveSize.style.asset';
import React, {useRef, useState} from 'react';
import {LayoutChangeEvent, ScrollView, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';

interface IRenderTab<T> {
  item: T;
  index: number;
  isActive: boolean;
}
interface ICommonTab<T> {
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  handleChangeTab: (tab: T, index: number) => void;
  tabs: Array<T>;
  renderTab: (props: IRenderTab<T>) => React.ReactNode;
  defaultActive?: number;
}

const Tabs = <T,>({
  handleChangeTab,
  tabs = [],
  containerStyle = {},
  renderTab,
  defaultActive = 0
}: ICommonTab<T>) => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const ITabWidthRef = useRef<number>(0);
  const currentTabRef = useRef<number>(0);

  const [activeTab, setActiveTab] = useState<number>(defaultActive);

  const handleTabChange = (index: number) => {
    setActiveTab(index)
    if (index > currentTabRef.current) {
      scrollViewRef.current?.scrollTo({x: ITabWidthRef.current, animated: true});
    }
    if (index < currentTabRef.current) {
      scrollViewRef.current?.scrollTo({x: 0, animated: true});
    }
    currentTabRef.current = index;
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      ref={scrollViewRef}
      scrollEventThrottle={16}
      onLayout={(event: LayoutChangeEvent) => {
        ITabWidthRef.current = event.nativeEvent.layout.width;
      }}
      contentContainerStyle={[styles.container,containerStyle]}>
      {tabs.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              handleChangeTab(item, index);
              handleTabChange(index);
            }}
            activeOpacity={0.3}
            key={index}>
            {renderTab({item, index, isActive: activeTab === index})}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
export default Tabs;

const styles = StyleSheet.create({
  container: {
    gap: rs(8),
    alignItems: 'center',
    alignSelf: 'flex-start',
    height: 30
  }
})

