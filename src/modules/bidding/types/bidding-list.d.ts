import { IFuelType, ILocation, IPriceFlag, IStar, IUid, TruckType } from "@type/global";

export interface IDriver {
    id: IUid;
    name: string;
    image?: string;
    number: string;
}

export interface IVehicle {
    id: IUid;
    height?: string; 
    capacity?: string; 
    type?: TruckType;
    length?: string;
    width?: string;
    registrationNumber?: string;
    hasLiftGate?: boolean;
    airConditioned?: boolean;
    fuelType?: IFuelType;
    notes?: string;
}

export interface IDriverRatings {
    type: IStar;
    count: number;
}

export interface ITag {
    uid: string;
    title: string;
}

export interface IReview {
    id: IUid;
    dateTime: string;
    note: string;
    tags: ITag[];
    rating: IStar;
}

export interface IEachBidding {
    id: IUid;
    driver: IDriver;
    isFavorite: boolean;
    ratingResult: IDriverRatings[];
    price: number;
    priceFlag: IPriceFlag;
    location: ILocation;
    totalTrip: number;
    totalReviews: number;
    vehicle: IVehicle;
}

export interface IBiddingItem {
    item: IEachBidding;
    index: number;
    length?: number;
}