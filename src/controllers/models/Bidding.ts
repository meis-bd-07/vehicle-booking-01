import { IDriverRatings } from "@bidding_modules/types/bidding-list";

class BiddingModel {
    calculationRating(ratingResult: IDriverRatings[] = []):number{
        const totalScore = ratingResult.reduce((sum, item) => sum + item.type * item.count, 0);
        const totalCount = ratingResult.reduce((sum, item) => sum + item.count, 0);
        if (totalCount === 0) return 0;
        const average = totalScore / totalCount;
        return Number(average.toFixed(1));
    }

}

const Bidding = new BiddingModel();

export default Bidding;