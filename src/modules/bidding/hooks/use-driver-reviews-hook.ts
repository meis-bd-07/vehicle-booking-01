import { IReview } from "@bidding_modules/types/bidding-list";
import { useDriverReviewState } from "@states/driver/driver-review.state";
import { IUid } from "@type/global";
import { useLayoutEffect } from "react";

const useDriverReviewHook = (driverId: IUid) => {
    const {
        getting,
        isLoading,
        isLoadingMore,
        isRefreshing,
        loadMore,
        refreshing,
        reviews,
        storeId,
    } = useDriverReviewState(s => s)

    useLayoutEffect(() => {
        storeId(driverId)
        getting(driverId)
    }, [driverId, getting, storeId])

    const getItem = (data: IReview[], index: number) => data[index];
    const getItemCount = (data: IReview[]) => data.length;

    return {
        getItem,
        getItemCount,
        reviews,
        isLoading,
        isLoadingMore,
        isRefreshing,
        refreshing,
        loadMore
    }
};

export default useDriverReviewHook;