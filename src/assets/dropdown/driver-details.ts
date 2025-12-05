export type IRatingTabs = {value: string | number, title: string, hasIcon: boolean}

const ratingTabs: IRatingTabs[] = [
    {title: 'সব', value: 'all', hasIcon: false},
    {title: '৫', value: 5, hasIcon: true},
    {title: '৪', value: 4, hasIcon: true},
    {title: '৩', value: 3, hasIcon: true},
    {title: '২', value: 2, hasIcon: true},
    {title: '১', value: 1, hasIcon: true},
];

export {ratingTabs}