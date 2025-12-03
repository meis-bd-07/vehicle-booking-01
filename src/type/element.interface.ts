import { ReactNode } from "react";

export type IFunctionalElementReturn = ReactNode | Promise<ReactNode>;

export type IViewStyles = any;

export interface IIconProps {
  width?: number;
  height?: number;
  fill?: string;
  fillOpacity?: number;
}