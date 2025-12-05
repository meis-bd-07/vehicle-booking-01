import { ISortingOrder } from "@type/global";

export type IRatingTabs = {value: string | number, title: string, hasIcon: boolean}

const ratingTabs: IRatingTabs[] = [
    {title: 'সব', value: 'all', hasIcon: false},
    {title: '৫', value: 5, hasIcon: true},
    {title: '৪', value: 4, hasIcon: true},
    {title: '৩', value: 3, hasIcon: true},
    {title: '২', value: 2, hasIcon: true},
    {title: '১', value: 1, hasIcon: true},
];

const reviewOrderSorting: {value: ISortingOrder, title: string}[] = [
    {value: 'DESC', title: 'নতুন\u00A0থেকে\u00A0পুরানো'},
    {value: 'ASC', title: 'পুরানো\u00A0থেকে\u00A0নতুন'},
];

export {ratingTabs, reviewOrderSorting}