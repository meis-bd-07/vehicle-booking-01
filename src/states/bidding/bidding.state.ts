import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from "@assets/ts/core.data";
import { IEachBidding } from "@bidding_modules/types/bidding-list"
import BiddingListService from "@services/bidding/List";
import { sleep } from "@utils/hooks/sleep.hook";
import { create } from "zustand"

type State =  {
  apiBlock: boolean;
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
  apiBlock: false,
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
      const {page, perPage, isRefreshing, list, apiBlock} = get();
      if(apiBlock){return}
      /* TODO: get data from api */
      set({apiBlock: true})
      await sleep(3000);
      const res = await BiddingListService.getList({page, perPage})
      let dataList: IEachBidding[] = [], hasMore = false
      if(res.status){
        if(isRefreshing || page === DEFAULT_PAGE) dataList = res.data;
        else dataList = [...list, ...res.data];
        if(res.data.length === perPage) hasMore = true
      }
      
      set({
        list: dataList,
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
}))
