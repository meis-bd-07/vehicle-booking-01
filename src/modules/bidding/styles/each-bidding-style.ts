import { colors } from "@assets/styles/colors.style.asset";
import { customPadding } from "@assets/styles/global.style.asset";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        minHeight: 89, 
        maxHeight: 117,
        flexDirection: 'row',
        gap: 10,
        ...customPadding(10, 16, 10, 16)
    },
    image: {height: 51, width: 51},
    body: {
        flexDirection: 'row', 
        gap: 10, 
        justifyContent: 'space-between', 
        flex: 1
    },
    ratingWrp: {flexDirection: 'row', gap: 8},
    starCircle: {
        height: 18,
        width: 18,
        borderRadius: 10,
        backgroundColor: colors.goldOpacity,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ratingInfo: {flexDirection: 'row', gap: 4, alignItems: 'center'},
    gpsInfo: {flexDirection: 'row', gap: 2, alignItems: 'center'},
    check: {alignItems: 'flex-end'},
    favoriteWrp: {flexDirection: 'row', gap: 1, backgroundColor: colors.heartRedOpacity, alignItems: 'center', paddingHorizontal: 4, alignSelf: 'flex-start'},
})

export default styles;