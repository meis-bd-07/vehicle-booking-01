import { colors } from "@assets/styles/colors.style.asset";
import { customPadding, globalStyles } from "@assets/styles/global.style.asset";
import { typographies } from "@assets/styles/typographies.style.asset";
import getHexaOpacityColorCode from "@utils/helpers/get-hexa-opacity-color-code";
import { StyleSheet } from "react-native";

const driverReviewStyles = StyleSheet.create({
    container: {
        gap: 10,
        borderWidth: 1,
        borderColor: colors.border,
        padding: 12,
        borderRadius: 8,
    },
    header: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    rating: {gap: 2, alignItems: 'center', flexDirection: 'row'},
    keywords: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    keyword: {
        ...customPadding(3, 8, 3, 8),
        backgroundColor: colors.white10,
        ...typographies.textSubTitleW400,
        borderRadius: 60,
        color: getHexaOpacityColorCode(colors.pureBlack, .88),
        overflow: 'hidden'
    },
    empty:{
        alignItems: 'center', 
        justifyContent: 'center',
        height: 150,
    },
    containerAlt: {...globalStyles.gap8, flexGrow: 1, paddingBottom: 60}
})

export default driverReviewStyles;