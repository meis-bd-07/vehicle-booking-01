import styles from "@bidding_modules/styles/driver-details-style"
import { Text, View } from "react-native"
import RatingDetails from "./rating-details"
import { globalStyles } from "@assets/styles/global.style.asset"
import { typographies } from "@assets/styles/typographies.style.asset"
import getHexaOpacityColorCode from "@utils/helpers/get-hexa-opacity-color-code"
import { colors } from "@assets/styles/colors.style.asset"
import { titles } from "@assets/text-and-message/titles.asset"
import { convertNumberToBangla, formatNumber } from "@utils/helpers/number-converter"
import AppMenu from "@components/menu/app-menu"
import FilterIcon from "@assets/icons/core/filter"
import { useDriverReviewState } from "@states/driver/driver-review.state"
import { useState } from "react"
import { IRatingTabs, ratingTabs, reviewOrderSorting } from "@assets/dropdown/driver-details"
import { ISortingOrder, IStar } from "@type/global"
import TikMarkIcon from "@assets/icons/core/tik-mark"
import Tabs from "@components/tabs/tabs"
import StarIcon from "@assets/icons/core/star"
import { IEachBidding } from "@bidding_modules/types/bidding-list"
import { SharedValue } from "react-native-reanimated"

const ReviewDetailsStickyHeader = ({scrollY, item}: {item: IEachBidding; scrollY: SharedValue<number>}) => {
    const {ratingTypeChange, orderChange}= useDriverReviewState(s => s);
    const [active, setActive] = useState(reviewOrderSorting[0].title);

    return (
        <View style={styles.stickyHeader}>
            <RatingDetails totalRating={item.totalRating}  ratings={item.ratingResult} scrollY={scrollY} />
            <View style={[globalStyles.gap12, globalStyles.mt10]}>
                <View style={styles.reviewHeader}>
                    <View style={styles.reviewHeaderLeft}>
                        <Text style={[typographies.textS14L21W500, {color: getHexaOpacityColorCode(colors.pureBlack, .88)}]}>
                            {titles.driverReview}
                        </Text>
                        <Text style={[typographies.textS14L21W400, {color: getHexaOpacityColorCode(colors.pureBlack, .64)}]}>
                            {`(${convertNumberToBangla(formatNumber(item.totalReviews))})`}
                        </Text>
                    </View>
                    <AppMenu
                        triggerUi={(
                            <View style={styles.reviewHeaderRight}>
                                <Text style={[typographies.textS12L21W400, {color: getHexaOpacityColorCode(colors.pureBlack, .88)}]}>{active}</Text>
                                <FilterIcon />
                            </View>
                        )}
                        onSelect={({value, title}) => {
                            orderChange(value as ISortingOrder)
                            setActive(title)
                        }}
                        options={reviewOrderSorting}
                        renderMenu={({index: optionIndex, isActive, item: option}) => (
                            <View style={styles.menuOption} key={optionIndex}>
                                <Text style={styles.menuText} numberOfLines={1}>{option.title}</Text>
                                {isActive && <TikMarkIcon />}
                            </View>
                        )}
                        menuStyles={styles.menu}
                        defaultValue={reviewOrderSorting[0].value}
                    />
                </View>

                {/* rating filter tab */}
                <Tabs<IRatingTabs>
                    tabs={ratingTabs}
                    handleChangeTab={(tab) => ratingTypeChange(tab.value as IStar | 'all')}
                    renderTab={({index, isActive, item: eachTab}) => (
                        <View key={index} style={[styles.eachTab, isActive ? styles.activeTab : styles.inactiveTab]}>
                            <Text style={[styles.tabText, isActive ? styles.activeTabText : styles.inactiveTabText]}>
                                {eachTab.title}
                            </Text>
                            {eachTab.hasIcon && (
                                <StarIcon
                                    height={12} 
                                    width={12} 
                                    fill={isActive ? colors.white : getHexaOpacityColorCode(colors.pureBlack, .54)}
                                />
                            )}
                        </View>
                    )}
                    defaultActive={0}
                />
            </View>
        </View>
    )
}

export default ReviewDetailsStickyHeader;