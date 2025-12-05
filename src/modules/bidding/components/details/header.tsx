import CrossIcon from "@assets/icons/core/cross";
import { colors } from "@assets/styles/colors.style.asset";
import { globalStyles } from "@assets/styles/global.style.asset";
import { typographies } from "@assets/styles/typographies.style.asset";
import { placeholders } from "@assets/text-and-message/placeholders.asset";
import { titles } from "@assets/text-and-message/titles.asset";
import styles from "@bidding_modules/styles/driver-details-style";
import { IEachBidding } from "@bidding_modules/types/bidding-list";
import { bsManager } from "@components/bottom-sheet";
import { useDriverReviewState } from "@states/driver/driver-review.state";
import getHexaOpacityColorCode from "@utils/helpers/get-hexa-opacity-color-code";
import { convertNumberToBangla, formatNumber } from "@utils/helpers/number-converter";
import { Text, TouchableOpacity, View } from "react-native";

const DetailsHeader = ({item}: {item: IEachBidding}) => {
    const storeId = useDriverReviewState(s => s).storeId
    const toggleViewMore = useDriverReviewState(s => s).toggleViewMore;
    const closeDetails = () => {
        bsManager.show({flag: false})
        storeId(null)
        toggleViewMore(true);
    }
    return (
        <View style={styles.headerContainer}>
            <View style={[globalStyles.flexShrink1, globalStyles.gap2]}>
                <Text numberOfLines={1} style={[typographies.headerS16W600, {color: getHexaOpacityColorCode(colors.pureBlack, .88)}]}>{titles.driverRatingReview}</Text>
                <View style={[globalStyles.flexRow, globalStyles.gap6]}>
                    <Text>{item.driver.name || placeholders.noName}</Text>
                    <View style={styles.verticalDivider} />
                    <Text style={[typographies.textSubTitleW400, {color: getHexaOpacityColorCode(colors.pureBlack, .88)}]}>
                        {titles.totalTrips}  {convertNumberToBangla(formatNumber(item.totalTrip))}
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.cross} activeOpacity={0.3} onPress={() => closeDetails()}>
                <CrossIcon />
            </TouchableOpacity>
        </View>
    )
};

export default DetailsHeader;