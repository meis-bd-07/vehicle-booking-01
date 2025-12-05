import { ISortingOrder, IStar, IUid } from "@type/global";

export interface IDriverDetailsPayload {
    page: number;
    perPage: number;
    id: IUid;
    order?: ISortingOrder;
    ratingType?: IStar | 'all'
}