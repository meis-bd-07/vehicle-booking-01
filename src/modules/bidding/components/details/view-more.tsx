import ArrowDownMoreIcon from "@assets/icons/core/arrow-down-more";
import { colors } from "@assets/styles/colors.style.asset";
import { globalStyles } from "@assets/styles/global.style.asset";
import { typographies } from "@assets/styles/typographies.style.asset";
import { titles } from "@assets/text-and-message/titles.asset";
import styles from "@bidding_modules/styles/driver-details-style";
import { useDriverReviewState } from "@states/driver/driver-review.state";
import getHexaOpacityColorCode from "@utils/helpers/get-hexa-opacity-color-code";
import { Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const ViewMore = ({scrollToFullHeight}: {scrollToFullHeight: () => void}) => {
    const toggleViewMore = useDriverReviewState(s => s).toggleViewMore;
    const showViewMore = useDriverReviewState(s => s).showViewMore;
    const reviews = useDriverReviewState(s => s).reviews;
    if(!showViewMore || reviews.length === 0){
        return null
    }
    return (
        <TouchableOpacity 
            style={styles.viewMoreWrp}
            activeOpacity={0.3}
            onPress={() => {
                toggleViewMore(false)
                scrollToFullHeight()
            }}
        >
            <LinearGradient
                colors={[
                    getHexaOpacityColorCode(colors.white, 0),
                    getHexaOpacityColorCode(colors.white, 1),
                ]}
                style={globalStyles.absoluteFillObject}
            />
            <View style={styles.viewMoreBtn}>
                <Text style={[typographies.textS12L18W400, {color: getHexaOpacityColorCode(colors.white, .87)}]}>{titles.viewMore}</Text>
                <ArrowDownMoreIcon />
            </View>
        </TouchableOpacity>
    )
};

export default ViewMore;