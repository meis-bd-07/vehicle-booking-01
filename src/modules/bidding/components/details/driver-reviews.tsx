import useDriverReviewHook from "@bidding_modules/hooks/use-driver-reviews-hook";
import styles from "@bidding_modules/styles/driver-reviews-style";
import { IUid } from "@type/global";
import { ActivityIndicator, RefreshControl, Text, View, VirtualizedList } from "react-native";
import DriverReviewItem from "./driver-each-review";
import { globalStyles } from "@assets/styles/global.style.asset";
import { colors } from "@assets/styles/colors.style.asset";
import EmptyReviewIcon from "@assets/icons/core/empty-review";
import { placeholders } from "@assets/text-and-message/placeholders.asset";
import { typographies } from "@assets/styles/typographies.style.asset";
import getHexaOpacityColorCode from "@utils/helpers/get-hexa-opacity-color-code";
import rs from "@assets/styles/responsiveSize.style.asset";

const DriverReviews = ({driverId}: {driverId: IUid}) => {
    const { 
        reviews, 
        getItemCount, getItem, refreshing, loadMore,
        isLoading, isLoadingMore, isRefreshing
    } = useDriverReviewHook(driverId)

    return (
        <VirtualizedList
            data={reviews}
            initialNumToRender={7}
            renderItem={({item, index}) => <DriverReviewItem item={item} index={index} />}
            keyExtractor={(item, index) => `${item.id}-${index.toString()}`}
            getItemCount={getItemCount}
            getItem={getItem}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={(
                <View style={styles.empty}>
                    {isLoading && <ActivityIndicator color={colors.primary} size={"large"} />}
                    {!isLoading && (
                        <View style={globalStyles.gap8}>
                            <EmptyReviewIcon />
                            <Text style={[typographies.textS14L24W500, {color: getHexaOpacityColorCode(colors.pureBlack, .88)}]}>
                                {placeholders.noReview}
                            </Text>
                        </View>
                    )}
                </View>
            )}
            contentContainerStyle={reviews.length === 0 || isLoading ? globalStyles.emptyFlexBox: styles.containerAlt}
            ListFooterComponent={isLoadingMore ? <View style={{height: rs(30)}}><ActivityIndicator color={colors.primary} /></View> : <View style={globalStyles.pb16} />}
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refreshing} />}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
        />
    )
};

export default DriverReviews;