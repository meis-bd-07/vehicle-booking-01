import { IEachBidding } from "@bidding_modules/types/bidding-list";

const items: IEachBidding[] = Array.from({ length: 44 }, (_, i) => {
    const index = i + 2;
    return {
        id: index,
        driver: {
            id: 100 + index,
            name: `Driver ${index}`,
            number: `01700000${index}`,
            image: "https://img.freepik.com/free-photo/portrait-handsome-smiling-man_171337-17483.jpg",
        },
        isFavorite: Math.random() < 0.3, // random true/false
        location: { lat: "", long: "" },
        price: 800 + index * 10,
        priceFlag: "bdt",
        ratingResult: [
            { type: 5, count: Math.floor(Math.random() * 15) + 5 },
            { type: 4, count: Math.floor(Math.random() * 10) + 3 },
            { type: 3, count: Math.floor(Math.random() * 5) + 1 },
            { type: 1, count: Math.floor(Math.random() * 3) },
        ],
        totalReviews: Math.floor(Math.random() * 200),
        totalTrip: Math.floor(Math.random() * 50),
        totalRating: Math.floor(Math.random() * 90),
        vehicle: {
            id: index + 20,
            length: `${6 + (index % 4)} feet`,
            type: index % 2 === 0 ? "open" : "covered",
            capacity: `${1 + (index % 3)} ton`,
        },
    } as IEachBidding;
})

const biddingList: IEachBidding[] = [
  {
    id: 1,
    driver: {
      id: 101,
      name: "John Doe",
      number: "12345676545",
      image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    },
    isFavorite: false,
    location: { lat: "", long: "" },
    price: 900,
    priceFlag: "bdt",
    ratingResult: [
      { type: 5, count: 12 },
      { type: 4, count: 7 },
      { type: 3, count: 2 },
      { type: 1, count: 1 },
    ],
    totalReviews: 123,
    totalTrip: 12,
    totalRating: 22,
    vehicle: { id: 12, length: "7 feet", type: "open", capacity: "1 ton" },
  },
  ...items,
];

export {biddingList};
