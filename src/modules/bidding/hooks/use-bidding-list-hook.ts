import { IEachBidding } from "@bidding_modules/types/bidding-list";
import { useBiddingListState } from "@states/bidding/bidding.state";
import { useLayoutEffect } from "react";

const useBiddingListHook = () => {
    const {getting, isLoading, isLoadingMore, isRefreshing, list, loadMore, refreshing} = useBiddingListState(s => s)

    useLayoutEffect(() => {
        getting();
    }, [getting])

    const getItem = (data: IEachBidding[], index: number) => data[index];
    const getItemCount = (data: IEachBidding[]) => data.length;

    return {
        isLoading, isLoadingMore, isRefreshing, list, loadMore, refreshing,
        getItem, getItemCount
    }
};

export default useBiddingListHook;