export type IUid = number | string;
export type IStar = 5 | 4 | 3 | 2 | 1;
export type IPriceFlag = 'bdt' | 'dollar';
export type ILocation = {
    lat: string;
    long: string;
    disposal?: string; /* TODO: if you want to show any specific icon */
}
export type ISortingOrder = 'ASC' | 'DESC';
export type TruckType =
  | 'open'        // খোলা
  | 'closed'      // বন্ধ
  | 'refrigerated'// ঠান্ডা বা ফ্রিজ
  | 'tanker'      // ট্যাংকার
  | 'flatbed'     // ফ্ল্যাটবেড
  | 'container';  // কনটেইনার
export type IFuelType = 'diesel' | 'petrol' | 'electric' | 'CNG';