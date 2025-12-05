import React from "react";

export type IBsManagerShow = {
    flag: boolean;
    component?: React.ReactNode | null;
    componentProps?: Record<string, unknown>;
    onClose?: () => void;
    onOpen?: () => void;
    bottomSheetProps?: Omit<IBottomSheetProps, 'children' | 'onBackdropPress'>;
    scrollTo?: number;
}

export type IBottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

export type IBottomSheetProps = {
  children?: React.ReactNode;
  fullHeight?: boolean;
  refreshAction?: boolean;
  hasBackdrop?: boolean;
  onBackdropPress: () => void;
  fixedHeader?: React.ReactNode;
  showGesture?: boolean;
  onGestureStart?: () => void;
  footer?: (scrollToTop: () => void) => React.ReactNode;
};