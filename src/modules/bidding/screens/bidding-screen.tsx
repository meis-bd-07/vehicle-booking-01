import { colors } from "@assets/styles/colors.style.asset";
import { globalStyles } from "@assets/styles/global.style.asset";
import rs from "@assets/styles/responsiveSize.style.asset";
import { typographies } from "@assets/styles/typographies.style.asset";
import { titles } from "@assets/text-and-message/titles.asset";
import BiddingItem from "@bidding_modules/components/bidding-item";
import useBiddingListHook from "@bidding_modules/hooks/use-bidding-list-hook";
import styles from "@bidding_modules/styles/bidding-style";
import { IEachBidding } from "@bidding_modules/types/bidding-list";
import CountDown from "@components/count-down/count-down";
import Header from "@components/header/header";
import PrivateContainer from "@routes/layouts/private.container";
import timeFormat from "@utils/helpers/time-format";
import {ActivityIndicator, RefreshControl, Text, View, VirtualizedList} from "react-native";

export default function Bidding() {
    const {list, isLoading, isLoadingMore, isRefreshing, refreshing, loadMore, getItemCount, getItem} = useBiddingListHook()

    const headerTimer = () => (
        <View style={styles.headerRight}>
            {/* TODO: make it dynamic based on your requirement */}
            <CountDown styles={[typographies.headerW700, {color: colors.white}]} startValue={1200} increment={-1} endValue={0} format={(value) => timeFormat(value)} />
        </View>
    )

    return (
        <PrivateContainer containerStyle={{backgroundColor: colors.white}}>
            <Header leftStyles={styles.headerLeft} rightComponent={headerTimer()} />
            <VirtualizedList
                data={list}
                initialNumToRender={7}
                renderItem={({item, index}: {item: IEachBidding, index: number}) => <BiddingItem index={index} item={item} />}
                keyExtractor={(item, index) => item.id.toString()+index}
                getItemCount={getItemCount}
                getItem={getItem}
                style={styles.listContainer}
                ListHeaderComponent={<View style={styles.listHeader}><Text style={[typographies.listHeaderW700]}>{titles.biddingOnGoing}</Text></View>}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={(
                    <View style={globalStyles.centerView}>
                        {isLoading && <ActivityIndicator color={colors.primary} size={"large"} />}
                        {!isLoading &&<Text style={[typographies.textSubTitleW400]}>{titles.noBiddingItem}</Text>}
                    </View>
                )}
                contentContainerStyle={list.length === 0 || isLoading ? globalStyles.emptyFlexBox: globalStyles.gap10}
                ListFooterComponent={isLoadingMore ? <View style={{height: rs(30)}}><ActivityIndicator color={colors.primary} /></View> : <View style={globalStyles.pb16} />}
                refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refreshing} />}
                onEndReached={loadMore}
                onEndReachedThreshold={0.1}
                stickyHeaderIndices={[0]}
            />

            {/* TODO: little bit confused about the below section */}
            <View style={styles.bottom}>
                <View style={styles.gesture} />
            </View>
        </PrivateContainer>
    );
}