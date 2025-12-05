import { colors } from "@assets/styles/colors.style.asset";
import { customPadding } from "@assets/styles/global.style.asset";
import rs from "@assets/styles/responsiveSize.style.asset";
import { typographies } from "@assets/styles/typographies.style.asset";
import getHexaOpacityColorCode from "@utils/helpers/get-hexa-opacity-color-code";
import { Platform, StyleSheet } from "react-native";

const driverDetailsStyles = StyleSheet.create({
    headerContainer: {
        height: 44, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 16,
        backgroundColor: colors.white,
        gap: 10,
        ...customPadding(0, 16, 0, 16)
    },
    verticalDivider: {
        height: 10,
        width: 1,
        backgroundColor: getHexaOpacityColorCode(colors.pureBlack, .23)
    },
    cross:{padding: 4},
    body: {
        paddingHorizontal: 16,
        gap: 20,
        paddingTop: 12,
        flex: 1 /* for scroll */
    },
    ratingContainer: {
        borderRadius: 8,
        backgroundColor: getHexaOpacityColorCode(colors.heartRed, .05),
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        overflow: 'hidden'
    },
    avgRatingWrp: {
        gap: 6,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    avgRatingIcon: {
        height: 20, 
        width: 20, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: colors.gold,
        borderRadius: 10
    },
    ratingPercentageWrp: {gap: 2, flex: 1},
    eachRatingWrp: {
        gap: 8,
        flexDirection: 'row',
        alignItems: 'center',
        height: 16
    },
    ratingProgress: {
        height: 4,
        backgroundColor: colors.red001,
        borderRadius: 20,
        width: rs(68)
    },
    ratingProgressActive: {
        height: 4,
        backgroundColor: colors.heartRed,
        borderRadius: 20
    },
    totalRating: {
        ...typographies.textSubTitleW400, 
        color: getHexaOpacityColorCode(colors.pureBlack, .64),
        textAlign:'center',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    /* review */
    reviewHeader: {
        height: Platform.OS === 'android' ?  33 : 38,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    reviewHeaderLeft: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center'
    },
    reviewHeaderRight: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    /* tabs */
    eachTab: {
        padding: 4, 
        borderRadius: 16, 
        gap: 2, 
        flexDirection: 'row', 
        alignItems: 'center', 
        height: 24,
        minWidth: 48,
        justifyContent: 'center'
    },
    activeTab: {backgroundColor: colors.heartRed},
    inactiveTab: {backgroundColor: colors.white, borderWidth: 1, borderColor: colors.gray200},
    tabText: {...typographies.textS12L18W600},
    activeTabText: {color: colors.white},
    inactiveTabText: {color: getHexaOpacityColorCode(colors.pureBlack, .54)},
    viewMoreWrp: {
        height: 72, 
        ...customPadding(24, 10, 24, 10), 
        gap: 10, 
        position: 'absolute', 
        zIndex: 1, 
        bottom: 0,
        left: 0, 
        right: 0,
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    viewMoreBtn: {
        height: 24, 
        borderRadius: 80, 
        gap: 2, 
        flexDirection: 'row', 
        ...customPadding(3, 10, 3, 10), 
        backgroundColor: colors.pureBlack
    },
    /* menu */
    menu: {paddingVertical: 8, borderRadius: 4, gap: 0},
    menuOption:{
        height: 33,
        ...customPadding(6, 16, 6, 16),
        gap: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menuText: {
        ...typographies.textS12L21W400,
        color: getHexaOpacityColorCode(colors.pureBlack, .88)
    },
    stickyHeader: {
        backgroundColor: colors.white,
        // gap: 10
    }
});

export default driverDetailsStyles;