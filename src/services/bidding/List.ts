import { config } from "@config";
import { IGettingBiddingList } from "@type/services/bidding-list";
import { biddingList } from "./dummy";

class ListService {
    async getList(payload: IGettingBiddingList){
        if(config.development){
            const startPoint = payload.page * payload.perPage;
            const endPoint = startPoint + payload.perPage;
            return {
                status: true,
                message: 'Got list',
                data: biddingList.slice(startPoint, endPoint ),
                responseCode: 200,
                extraData: null
            }
        }
        return {
            status: false,
            message: 'Can not get list',
            data: [],
            responseCode: 401,
            extraData: null
        }
        /* TODO: real api call here */
    }
}

const BiddingListService = new ListService();

export default BiddingListService;