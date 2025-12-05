import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from "@assets/ts/core.data";
import { IReview } from "@bidding_modules/types/bidding-list";
import DriverReviewService from "@services/driver/Review";
import { ISortingOrder, IStar, IUid } from "@type/global";
import showAlertWithOneAction from "@utils/helpers/show-aleart-with-one-action";
import { sleep } from "@utils/hooks/sleep.hook";
import { create } from "zustand"

type State =  {
    apiBlock: boolean;
    driverId: IUid | null;
    reviews: IReview[];
    page: number;
    perPage: number;
    isLoading: boolean;
    isLoadingMore: boolean;
    isRefreshing: boolean;
    hasMore: boolean;
    order: ISortingOrder;
    ratingType: IStar | 'all',
    showViewMore: boolean;
}
type Action = {
    storeId: (id: IUid | null) => void;
    getting: (driverId?: IUid) => Promise<void>;
    refreshing: () => Promise<void>;
    loadMore: () => Promise<void>;
    ratingTypeChange: (ratingType: IStar | 'all') => Promise<void>;
    orderChange: (order: ISortingOrder) => Promise<void>;
    toggleViewMore: (flag: boolean) => void;
}

const initialState: State = {
    apiBlock: false,
    driverId: null,
    reviews: [],
    page: DEFAULT_PAGE,
    perPage: DEFAULT_PER_PAGE,
    isLoading: true,
    isLoadingMore: false,
    isRefreshing: false,
    hasMore: false,
    order: 'DESC',
    ratingType: 'all',
    showViewMore: true,
}

export const useDriverReviewState = create<State & Action>((set, get) => ({
    ...initialState,
    storeId: (id) => {
        if(!id){
            set({
                apiBlock: false,
                driverId: null,
                reviews: [],
                page: DEFAULT_PAGE,
                perPage: DEFAULT_PER_PAGE,
                isLoading: true,
                isLoadingMore: false,
                isRefreshing: false,
                hasMore: false,
                order: 'DESC',
                ratingType: 'all'
            });
        }
        else{
            set({driverId: id});
        }
    },
    getting: async (id) => {
        try{
            const {page, perPage, isRefreshing, reviews, driverId, order, ratingType, apiBlock} = get();
            if(!id && !driverId){
                showAlertWithOneAction({title: 'Wrong try', body: 'Please select a driver first !'})
                return;
            }
            if(apiBlock){return}
            set({apiBlock: true})
            /* TODO: get data from api */
            await sleep(3000);
            const res = await DriverReviewService.getDriverReviews({page, perPage, id: id || driverId as IUid, order, ratingType})
            let dataList: IReview[] = [], hasMore = false
            if(res.status){
                if(isRefreshing || page === DEFAULT_PAGE) dataList = res.data;
                else dataList = [...reviews, ...res.data];
                if(res.data.length === perPage) hasMore = true
            }
            
            set({
                reviews: dataList,
                page: page + 1,
                hasMore: hasMore,
                isLoading: false, isLoadingMore: false, isRefreshing: false,
                apiBlock: false
            });
        }
        catch(e){
            console.log('e', e)
            set({isLoading: false, isLoadingMore: false, isRefreshing: false, apiBlock: false});
        }
    },
    refreshing: async () => {
        const getting = get().getting;
        set({isRefreshing: true, page: DEFAULT_PAGE, hasMore: false});
        await getting()
    },
    loadMore: async () => {
        const {getting, hasMore} = get();
        if(!hasMore) return
        set({isLoadingMore: true});
        await getting()
    },
    ratingTypeChange: async (type) => {
        const getting = get().getting;
        set({isRefreshing: false, page: DEFAULT_PAGE, hasMore: false, isLoading: true, ratingType: type, reviews: []});
        await getting()
    },
    orderChange: async (order) => {
        const getting = get().getting;
        set({isRefreshing: false, page: DEFAULT_PAGE, hasMore: false, isLoading: true, order: order, reviews: []});
        await getting()
    },
    toggleViewMore: (flag) => {
        console.log('-----------')
        set({showViewMore: flag})
    }
}))
