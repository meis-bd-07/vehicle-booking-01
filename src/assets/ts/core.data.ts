import {Dimensions, StatusBar} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 0;

export const keyExtractor = (item: any, index: number) => index.toString();

export const DEFAULT_PAGE = 0;
export const DEFAULT_PER_PAGE = 20;

export const PRICE_FLAG = {
    'bdt': '৳',
    'dollar': '$'
}