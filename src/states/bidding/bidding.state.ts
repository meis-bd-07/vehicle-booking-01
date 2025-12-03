import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from "@assets/ts/core.data";
import { IEachBidding } from "@bidding_modules/types/bidding-list"
import BiddingListService from "@services/bidding/List";
import { create } from "zustand"

type State =  {
  list: IEachBidding[];
  page: number;
  perPage: number;
  isLoading: boolean;
  isLoadingMore: boolean;
  isRefreshing: boolean;
  hasMore: boolean;
}
type Action = {
  getting: () => Promise<void>;
  refreshing: () => Promise<void>;
  loadMore: () => Promise<void>;
}

const initialState: State = {
  list: [],
  page: DEFAULT_PAGE,
  perPage: DEFAULT_PER_PAGE,
  isLoading: true,
  isLoadingMore: false,
  isRefreshing: false,
  hasMore: false
}

export const useBiddingListState = create<State & Action>((set, get) => ({
  ...initialState,
  getting: async () => {
    try{
      const {page, perPage, isRefreshing, list} = get();
      /* TODO: get data from api */
      const res = await BiddingListService.getList({page, perPage})
      let dataList: IEachBidding[] = [], hasMore = false
      if(res.status){
        if(isRefreshing) dataList = res.data;
        else dataList = [...list, ...res.data];
        if(res.data.length === perPage) hasMore = true
      }
      
      set({
        list: dataList,
        page: page + 1,
        hasMore: hasMore,
        isLoading: false, isLoadingMore: false, isRefreshing: false
      });
    }
    catch(e){
      console.log('e', e)
      set({isLoading: false, isLoadingMore: false, isRefreshing: false});
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
}))
