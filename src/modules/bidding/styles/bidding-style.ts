import { colors } from "@assets/styles/colors.style.asset";
import { customPadding } from "@assets/styles/global.style.asset";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerLeft: {
        height: 40, 
        width: 40, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: colors.white, 
        borderRadius: 50
    },
    headerRight: {
        ...customPadding(2, 4, 2, 4), 
        color: colors.white, 
        textAlign: 'center', 
        borderRadius: 1, 
        backgroundColor: colors.green
    },
    listContainer: {
        paddingHorizontal: 16,
        marginTop: 16,
        gap: 10
    },
    bottom: {
        height: 60,
        shadowColor: '#000', // for iOS shadow color
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,        
        shadowRadius: 3.84,         
        elevation: 5,  // Android shadow
        backgroundColor: colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 15,
        alignItems: 'center',
        paddingTop: 10
    },
    gesture: {
        width: 44,
        height: 3,
        borderRadius: 1.5,
        backgroundColor: colors.gray7
    },
    listHeader: {paddingBottom: 10, backgroundColor: colors.white},
    biddingTagWrp: {height: 20, borderRadius: 9.5, backgroundColor: colors.pureBlack, marginTop: 10}
});

export default styles;