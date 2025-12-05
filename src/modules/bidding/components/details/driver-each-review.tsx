import StarIcon from "@assets/icons/core/star";
import { colors } from "@assets/styles/colors.style.asset";
import { globalStyles } from "@assets/styles/global.style.asset";
import { typographies } from "@assets/styles/typographies.style.asset";
import styles from "@bidding_modules/styles/driver-reviews-style";
import { IReview } from "@bidding_modules/types/bidding-list";
import { dateFormat } from "@utils/helpers/date-time-formatter";
import getHexaOpacityColorCode from "@utils/helpers/get-hexa-opacity-color-code";
import { convertToBanglaDate } from "@utils/helpers/number-converter";
import { Text, View } from "react-native";

const DriverReviewItem = ({index, item}: {item: IReview, index: number}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.rating}>
                    {Array.from({length: 5}, (_, starIndex) => (
                        <StarIcon 
                            fill={starIndex + 1 <= Number(item.rating) ? colors.gold : getHexaOpacityColorCode(colors.pureBlack, .23) } 
                            height={14} 
                            width={14} 
                            key={`${starIndex}-${index}`}
                        />
                    ))}
                </View>
                <Text style={[typographies.textS10L21W400, {color: getHexaOpacityColorCode(colors.pureBlack, .64)}]}>
                    {convertToBanglaDate(dateFormat(item.dateTime || new Date()))}
                </Text>
            </View>

            <View style={globalStyles.gap8}>
                {item.note && <Text style={[typographies.textSubTitleW400, {color: getHexaOpacityColorCode(colors.pureBlack, .64)}]}>
                    {item.note}
                </Text>}
                <View style={styles.keywords}>
                    {(item.tags || []).map((tag, tagIndex) => (
                        <Text style={styles.keyword} key={tagIndex}>{tag.title}</Text>
                    ))}
                </View>
            </View>
        </View>
    )
};

export default DriverReviewItem;