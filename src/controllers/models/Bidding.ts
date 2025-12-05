import { IDriverRatings } from "@bidding_modules/types/bidding-list";
import { IStar } from "@type/global";
import { convertNumberToBangla } from "@utils/helpers/number-converter";

class BiddingModel {
    calculationRating(ratingResult: IDriverRatings[] = []):number{
        const totalScore = ratingResult.reduce((sum, item) => sum + item.type * item.count, 0);
        const totalCount = ratingResult.reduce((sum, item) => sum + item.count, 0);
        if (totalCount === 0) return 0;
        const average = totalScore / totalCount;
        return Number(average.toFixed(1));
    }
    makeRatingArray(ratingResult: IDriverRatings[] = []): {type: string, percentage: string, value: number}[]{
        const allStars: IStar[] = [5, 4, 3, 2, 1];
        const total = ratingResult.reduce((sum, r) => sum + r.count, 0);
        return allStars.map((star) => {
            const found = ratingResult.find((r) => r.type === star);
            const count = found?.count ?? 0;
            const percentage = total === 0 ? 0 : (count / total) * 100;
            return {
                type: convertNumberToBangla(star),
                percentage: `${convertNumberToBangla(percentage)}%`,
                value: percentage
            };
        })
    }
}

const Bidding = new BiddingModel();

export default Bidding;