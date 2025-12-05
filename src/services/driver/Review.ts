import { config } from "@config";
import { driverReviews } from "./dummy";
import { IDriverDetailsPayload } from "@type/services/driver";
import { IReview } from "@bidding_modules/types/bidding-list";

class ReviewService {
    async getDriverReviews(payload: IDriverDetailsPayload){
        if(config.development){
            const startPoint = payload.page * payload.perPage;
            const endPoint = startPoint + payload.perPage;
            const allItems: IReview[] = driverReviews[payload.id] || []
            return {
                status: true,
                message: 'Got review list',
                data: allItems.slice(startPoint, endPoint),
                responseCode: 200,
                extraData: null
            }
        }
        return {
            status: false,
            message: 'Can not get review list',
            data: [],
            responseCode: 401,
            extraData: null
        }
        /* TODO: real api call here */
    }
}

const DriverReviewService = new ReviewService();

export default DriverReviewService;