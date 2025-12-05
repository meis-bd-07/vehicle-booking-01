import { IRatingTabs, ratingTabs } from "@assets/dropdown/driver-details";
import FilterIcon from "@assets/icons/core/filter";
import StarIcon from "@assets/icons/core/star";
import { colors } from "@assets/styles/colors.style.asset";
import { globalStyles } from "@assets/styles/global.style.asset";
import { typographies } from "@assets/styles/typographies.style.asset";
import { titles } from "@assets/text-and-message/titles.asset";
import styles from "@bidding_modules/styles/driver-details-style";
import { IEachBidding } from "@bidding_modules/types/bidding-list";
import Tabs from "@components/tabs/tabs";
import getHexaOpacityColorCode from "@utils/helpers/get-hexa-opacity-color-code";
import { convertNumberToBangla, formatNumber } from "@utils/helpers/number-converter";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { useDriverReviewState } from "@states/driver/driver-review.state";
import { IStar } from "@type/global";
import React, { Suspense } from "react";

const DriverReviews = React.lazy(() => import('./driver-reviews'));

const ReviewDetails = ({item}: {item: IEachBidding}) => {
    const {ratingTypeChange, reviews}= useDriverReviewState(s => s);

    return (
        <View style={[globalStyles.gap12, globalStyles.flexShrink1]}>
            {/* title header */}
            <View style={styles.reviewHeader}>
                <View style={styles.reviewHeaderLeft}>
                    <Text style={[typographies.textS14L21W500, {color: getHexaOpacityColorCode(colors.pureBlack, .88)}]}>
                        {titles.driverReview}
                    </Text>
                    <Text style={[typographies.textS14L21W400, {color: getHexaOpacityColorCode(colors.pureBlack, .64)}]}>
                        {`(${convertNumberToBangla(formatNumber(item.totalReviews))})`} - {reviews.length}
                    </Text>
                </View>
                {/* TODO: make a dropdown component */}
                <TouchableOpacity style={styles.reviewHeaderRight} activeOpacity={0.3}>
                    <Text style={[typographies.textS12L21W400, {color: getHexaOpacityColorCode(colors.pureBlack, .88)}]}>{`নতুন\u00A0থেকে\u00A0পুরানো`}</Text>
                    <FilterIcon />
                </TouchableOpacity>
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
            <Suspense fallback={<ActivityIndicator size="large" color={colors.primary} />}>
                <DriverReviews driverId={item.driver.id} />
            </Suspense>
        </View>
    )
};
export default ReviewDetails;