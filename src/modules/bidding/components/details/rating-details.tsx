import StarIcon from "@assets/icons/core/star";
import { colors } from "@assets/styles/colors.style.asset";
import { globalStyles } from "@assets/styles/global.style.asset";
import rs from "@assets/styles/responsiveSize.style.asset";
import { typographies } from "@assets/styles/typographies.style.asset";
import { titles } from "@assets/text-and-message/titles.asset";
import styles from "@bidding_modules/styles/driver-details-style";
import { IDriverRatings } from "@bidding_modules/types/bidding-list";
import Bidding from "@controllers/models/Bidding";
import getHexaOpacityColorCode from "@utils/helpers/get-hexa-opacity-color-code";
import { convertNumberToBangla } from "@utils/helpers/number-converter";
import { useMemo } from "react";
import { Text, View } from "react-native";

const RatingDetails = ({ratings, totalRating}: {ratings: IDriverRatings[]; totalRating: number}) => {

    const ratingsMemo = useMemo(() => Bidding.makeRatingArray(ratings), [ratings])

    const eachRating = (item: {type: string, percentage: string, value: number}, index: number) => {
        return (
            <View style={styles.eachRatingWrp} key={index}>
                <Text style={[typographies.textS10W400, {color: getHexaOpacityColorCode(colors.pureBlack, .88)}]}>
                    {item.type}
                </Text>
                <StarIcon height={12} width={12} />
                <View style={styles.ratingProgress}>
                    <View style={[styles.ratingProgressActive, {width: rs(item.value)}]} />
                </View>
                <Text style={[typographies.textS10W400, {color: getHexaOpacityColorCode(colors.pureBlack, .88)}]}>
                    {item.percentage}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.ratingContainer}>
            <View style={styles.avgRatingWrp}>
                <View style={[globalStyles.flexRow, globalStyles.gap6]}>
                    <View style={styles.avgRatingIcon}>
                        <StarIcon fill={colors.white} />
                    </View>
                    <Text style={[typographies.textS24W700, {color: getHexaOpacityColorCode(colors.pureBlack, .88)}]}>
                        {convertNumberToBangla(Bidding.calculationRating(ratings))}
                    </Text>
                </View>
                <Text style={styles.totalRating}>
                    {`(${convertNumberToBangla(totalRating || 0)} ${titles.ratingTitle})`}
                </Text>
            </View>

            <View style={styles.ratingPercentageWrp}>
                {ratingsMemo.map((item, index) => eachRating(item, index))}
            </View>
        </View>
    )

}

export default RatingDetails;