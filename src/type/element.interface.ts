import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type IFunctionalElementReturn = ReactNode | Promise<ReactNode>;

export type IViewStyles = StyleProp<ViewStyle>;

export interface IIconProps {
  width?: number;
  height?: number;
  fill?: string;
  fillOpacity?: number;
}