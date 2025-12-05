import { IEachBidding } from "@bidding_modules/types/bidding-list";

const biddingList: IEachBidding[] = [
  {
    id: 101,
    driver: {
      id: 101,
      name: "রহিম\u00A0উদ্দিন",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      number: "+8801712345678"
    },
    isFavorite: false,
    ratingResult: [{ type: 5, count: 12 }, { type: 4, count: 5 }, { type: 3, count: 2 }],
    price: 1500,
    priceFlag: 'bdt',
    location: { lat: "23.8103", long: "90.4125" },
    totalTrip: 120,
    totalReviews: 19,
    vehicle: {
      id: 201,
      type: 'closed',
      capacity: "৫\u00A0টন",
      length: "৭\u00A0ফুট",
      width: "৫\u00A0ফুট",
      registrationNumber: "ঢাকা‑A1234",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.6
  },
  {
    id: 102,
    driver: {
      id: 102,
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      number: "+8801719876543"
    },
    isFavorite: true,
    ratingResult: [{ type: 5, count: 20 }, { type: 4, count: 8 }],
    price: 2000,
    priceFlag: 'bdt',
    location: { lat: "22.3569", long: "91.7832" },
    totalTrip: 200,
    totalReviews: 28,
    vehicle: {
      id: 202,
      type: 'open',
      capacity: "৩\u00A0টন",
      length: "৮\u00A0ফুট",
      width: "৬\u00A0ফুট",
      registrationNumber: "চট্টগ্রাম‑B2345",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.8
  },
  {
    id: 103,
    driver: {
      id: 103,
      name: "Sara\u00A0Khan",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      number: "+8801787654321"
    },
    isFavorite: false,
    ratingResult: [{ type: 5, count: 5 }, { type: 3, count: 1 }],
    price: 1200,
    priceFlag: 'bdt',
    location: { lat: "24.8949", long: "91.8687" },
    totalTrip: 45,
    totalReviews: 6,
    vehicle: {
      id: 203,
      type: 'flatbed',
      capacity: "২\u00A0টন",
      length: "৬.৫\u00A0ফুট",
      width: "৫\u00A0ফুট",
      registrationNumber: "সিলেট‑C3456",
      hasLiftGate: true,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.2
  },
  {
    id: 104,
    driver: {
      id: 104,
      name: "মোহাম্মদ\u00A0আলম",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      number: "+8801754321987"
    },
    isFavorite: false,
    ratingResult: [{ type: 4, count: 7 }, { type: 2, count: 3 }],
    price: 1800,
    priceFlag: 'bdt',
    location: { lat: "24.3636", long: "88.6241" },
    totalTrip: 90,
    totalReviews: 10,
    vehicle: {
      id: 204,
      type: 'container',
      capacity: "১০\u00A0টন",
      length: "১২\u00A0ফুট",
      width: "৮\u00A0ফুট",
      registrationNumber: "রাজশাহী‑D4567",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 3.9
  },
  {
    id: 105,
    driver: {
      id: 105,
      name: "Michael\u00A0Smith",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
      number: "+8801723456789"
    },
    isFavorite: true,
    ratingResult: [{ type: 5, count: 15 }, { type: 4, count: 6 }, { type: 3, count: 2 }, { type: 2, count: 1 }],
    price: 2200,
    priceFlag: 'bdt',
    location: { lat: "22.8456", long: "89.5403" },
    totalTrip: 150,
    totalReviews: 24,
    vehicle: {
      id: 205,
      type: 'refrigerated',
      capacity: "৫\u00A0টন",
      length: "৯\u00A0ফুট",
      width: "৬\u00A0ফুট",
      registrationNumber: "খুলনা‑E5678",
      hasLiftGate: false,
      airConditioned: true,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.7
  },
  {
    id: 106,
    driver: {
      id: 106,
      name: "নূর\u00A0আলম",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      number: "+8801701234567"
    },
    isFavorite: false,
    ratingResult: [{ type: 5, count: 8 }, { type: 4, count: 4 }],
    price: 1400,
    priceFlag: 'bdt',
    location: { lat: "22.7010", long: "90.3535" },
    totalTrip: 60,
    totalReviews: 12,
    vehicle: {
      id: 206,
      type: 'open',
      capacity: "১.৫\u00A0টন",
      length: "৭\u00A0ফুট",
      width: "৫\u00A0ফুট",
      registrationNumber: "বরিশাল‑F6789",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'CNG',
      notes: ""
    },
    totalRating: 4.3
  },
  {
    id: 107,
    driver: {
      id: 107,
      name: "Emily\u00A0Jones",
      image: "https://randomuser.me/api/portraits/women/16.jpg",
      number: "+8801734567890"
    },
    isFavorite: false,
    ratingResult: [{ type: 4, count: 5 }, { type: 3, count: 2 }],
    price: 1700,
    priceFlag: 'bdt',
    location: { lat: "25.7439", long: "89.2752" },
    totalTrip: 80,
    totalReviews: 9,
    vehicle: {
      id: 207,
      type: 'flatbed',
      capacity: "৩\u00A0টন",
      length: "৮\u00A0ফুট",
      width: "৬\u00A0ফুট",
      registrationNumber: "রংপুর‑G7890",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.1
  },
  {
    id: 108,
    driver: {
      id: 108,
      name: "আবুল\u00A0হাসান",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
      number: "+8801745678901"
    },
    isFavorite: true,
    ratingResult: [{ type: 5, count: 10 }, { type: 4, count: 3 }, { type: 2, count: 1 }],
    price: 1600,
    priceFlag: 'bdt',
    location: { lat: "24.8496", long: "89.3710" },
    totalTrip: 100,
    totalReviews: 14,
    vehicle: {
      id: 208,
      type: 'closed',
      capacity: "২.৫\u00A0টন",
      length: "৭.৫\u00A0ফুট",
      width: "৫.৫\u00A0ফুট",
      registrationNumber: "বগুড়া‑H8901",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.5
  },
  {
    id: 109,
    driver: {
      id: 109,
      name: "David\u00A0Lee",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
      number: "+8801798765432"
    },
    isFavorite: false,
    ratingResult: [{ type: 5, count: 18 }, { type: 4, count: 7 }],
    price: 2100,
    priceFlag: 'bdt',
    location: { lat: "23.8103", long: "90.4125" },
    totalTrip: 180,
    totalReviews: 25,
    vehicle: {
      id: 209,
      type: 'tanker',
      capacity: "৫\u00A0টন",
      length: "১০\u00A0ফুট",
      width: "৭\u00A0ফুট",
      registrationNumber: "ঢাকা‑I9012",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.9
  },
  {
    id: 110,
    driver: {
      id: 110,
      name: "নাজমুল\u00A0ইমান",
      image: "https://randomuser.me/api/portraits/men/19.jpg",
      number: "+8801711112223"
    },
    isFavorite: false,
    ratingResult: [{ type: 3, count: 4 }, { type: 2, count: 2 }],
    price: 1300,
    priceFlag: 'bdt',
    location: { lat: "22.3569", long: "91.7832" },
    totalTrip: 55,
    totalReviews: 6,
    vehicle: {
      id: 210,
      type: 'open',
      capacity: "২\u00A0টন",
      length: "৬\u00A0ফুট",
      width: "৫\u00A0ফুট",
      registrationNumber: "চট্টগ্রাম‑J0123",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'CNG',
      notes: ""
    },
    totalRating: 3.8
  },
  {
    id: 111,
    driver: {
      id: 111,
      name: "Jessica\u00A0Brown",
      image: "https://randomuser.me/api/portraits/women/20.jpg",
      number: "+8801722223334"
    },
    isFavorite: true,
    ratingResult: [{ type: 5, count: 14 }, { type: 4, count: 5 }, { type: 1, count: 1 }],
    price: 1950,
    priceFlag: 'bdt',
    location: { lat: "24.8949", long: "91.8687" },
    totalTrip: 130,
    totalReviews: 20,
    vehicle: {
      id: 211,
      type: 'container',
      capacity: "৮\u00A0টন",
      length: "১১\u00A0ফুট",
      width: "৭\u00A0ফুট",
      registrationNumber: "সিলেট‑K1234",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.6
  },
  {
    id: 112,
    driver: {
      id: 112,
      name: "রাশেদ\u00A0উদ্দিন",
      image: "https://randomuser.me/api/portraits/men/21.jpg",
      number: "+8801733334445"
    },
    isFavorite: false,
    ratingResult: [{ type: 4, count: 9 }, { type: 3, count: 2 }],
    price: 1450,
    priceFlag: 'bdt',
    location: { lat: "24.3636", long: "88.6241" },
    totalTrip: 70,
    totalReviews: 11,
    vehicle: {
      id: 212,
      type: 'flatbed',
      capacity: "২.৫\u00A0টন",
      length: "৭.৫\u00A0ফুট",
      width: "৫.৫\u00A0ফুট",
      registrationNumber: "রাজশাহী‑L2345",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.0
  },
  {
    id: 113,
    driver: {
      id: 113,
      name: "Oliver\u00A0Wilson",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      number: "+8801744445556"
    },
    isFavorite: false,
    ratingResult: [{ type: 5, count: 11 }, { type: 4, count: 4 }],
    price: 1650,
    priceFlag: 'bdt',
    location: { lat: "22.8456", long: "89.5403" },
    totalTrip: 95,
    totalReviews: 15,
    vehicle: {
      id: 213,
      type: 'closed',
      capacity: "৪\u00A0টন",
      length: "৯\u00A0ফুট",
      width: "৬\u00A0ফুট",
      registrationNumber: "খুলনা‑M3456",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.4
  },
  {
    id: 114,
    driver: {
      id: 114,
      name: "নুরা\u00A0খাতুন",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      number: "+8801755556667"
    },
    isFavorite: true,
    ratingResult: [{ type: 5, count: 9 }, { type: 3, count: 3 }],
    price: 1550,
    priceFlag: 'bdt',
    location: { lat: "22.7010", long: "90.3535" },
    totalTrip: 65,
    totalReviews: 12,
    vehicle: {
      id: 214,
      type: 'open',
      capacity: "২\u00A0টন",
      length: "৭\u00A0ফুট",
      width: "৫\u00A0ফুট",
      registrationNumber: "বরিশাল‑N4567",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'CNG',
      notes: ""
    },
    totalRating: 4.2
  },
  {
    id: 115,
    driver: {
      id: 115,
      name: "Robert\u00A0Martin",
      image: "https://randomuser.me/api/portraits/men/24.jpg",
      number: "+8801766667778"
    },
    isFavorite: false,
    ratingResult: [{ type: 4, count: 6 }, { type: 2, count: 2 }],
    price: 1700,
    priceFlag: 'bdt',
    location: { lat: "25.7439", long: "89.2752" },
    totalTrip: 85,
    totalReviews: 10,
    vehicle: {
      id: 215,
      type: 'flatbed',
      capacity: "৩\u00A0টন",
      length: "৮\u00A0ফুট",
      width: "৬\u00A0ফুট",
      registrationNumber: "রংপুর‑O5678",
      hasLiftGate: true,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.0
  },
  {
    id: 116,
    driver: {
      id: 116,
      name: "আব্দুল\u00A0মাজিদ",
      image: "https://randomuser.me/api/portraits/men/25.jpg",
      number: "+8801777778889"
    },
    isFavorite: false,
    ratingResult: [{ type: 5, count: 7 }, { type: 4, count: 3 }],
    price: 1350,
    priceFlag: 'bdt',
    location: { lat: "24.8496", long: "89.3710" },
    totalTrip: 75,
    totalReviews: 10,
    vehicle: {
      id: 216,
      type: 'closed',
      capacity: "২.৫\u00A0টন",
      length: "৭.৫\u00A0ফুট",
      width: "৫.৫\u00A0ফুট",
      registrationNumber: "বগুড়া‑P6789",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.3
  },
  {
    id: 117,
    driver: {
      id: 117,
      // name missing (2% case)
      name: "",
      image: "https://randomuser.me/api/portraits/women/26.jpg",
      number: "+8801788889990"
    },
    isFavorite: false,
    ratingResult: [{ type: 3, count: 2 }],
    price: 1250,
    priceFlag: 'bdt',
    location: { lat: "23.8103", long: "90.4125" },
    totalTrip: 30,
    totalReviews: 2,
    vehicle: {
      id: 217,
      type: 'open',
      capacity: "১\u00A0টন",
      length: "৬\u00A0ফুট",
      width: "৫\u00A0ফুট",
      registrationNumber: "ঢাকা‑Q7890",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'CNG',
      notes: ""
    },
    totalRating: 3.5
  },
  {
    id: 118,
    driver: {
      id: 118,
      name: "Anna\u00A0Lee",
      image: "https://randomuser.me/api/portraits/women/27.jpg",
      number: "+8801799990001"
    },
    isFavorite: true,
    ratingResult: [{ type: 5, count: 13 }, { type: 4, count: 4 }, { type: 3, count: 1 }],
    price: 1900,
    priceFlag: 'bdt',
    location: { lat: "22.3569", long: "91.7832" },
    totalTrip: 140,
    totalReviews: 18,
    vehicle: {
      id: 218,
      type: 'refrigerated',
      capacity: "৪\u00A0টন",
      length: "৯\u00A0ফুট",
      width: "৬\u00A0ফুট",
      registrationNumber: "চট্টগ্রাম‑R8901",
      hasLiftGate: false,
      airConditioned: true,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.7
  },
  {
    id: 119,
    driver: {
      id: 119,
      name: "হাসিব\u00A0উদ্দিন",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
      number: "+8801700001112"
    },
    isFavorite: false,
    ratingResult: [{ type: 4, count: 8 }, { type: 2, count: 1 }],
    price: 1500,
    priceFlag: 'bdt',
    location: { lat: "24.8949", long: "91.8687" },
    totalTrip: 90,
    totalReviews: 12,
    vehicle: {
      id: 219,
      type: 'container',
      capacity: "৬\u00A0টন",
      length: "১০\u00A0ফুট",
      width: "৭\u00A0ফুট",
      registrationNumber: "সিলেট‑S9012",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.1
  },
  {
    id: 120,
    driver: {
      id: 120,
      name: "Chris\u00A0Evans",
      image: "https://randomuser.me/api/portraits/men/29.jpg",
      number: "+8801712223334"
    },
    isFavorite: true,
    ratingResult: [{ type: 5, count: 16 }, { type: 4, count: 6 }, { type: 3, count: 2 }],
    price: 2050,
    priceFlag: 'bdt',
    location: { lat: "24.3636", long: "88.6241" },
    totalTrip: 160,
    totalReviews: 24,
    vehicle: {
      id: 220,
      type: 'flatbed',
      capacity: "৫\u00A0টন",
      length: "৯\u00A0ফুট",
      width: "৬\u00A0ফুট",
      registrationNumber: "রাজশাহী‑T0123",
      hasLiftGate: true,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.8
  },
  {
    id: 121,
    driver: {
      id: 121,
      name: "কালু\u00A0চন্দ্র",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
      number: "+8801723334445"
    },
    isFavorite: false,
    ratingResult: [{ type: 3, count: 5 }, { type: 1, count: 1 }],
    price: 1350,
    priceFlag: 'bdt',
    location: { lat: "22.8456", long: "89.5403" },
    totalTrip: 60,
    totalReviews: 7,
    vehicle: {
      id: 221,
      type: 'closed',
      capacity: "৩\u00A0টন",
      length: "৮\u00A0ফুট",
      width: "৫\u00A0ফুট",
      registrationNumber: "খুলনা‑U1234",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 3.9
  },
  {
    id: 122,
    driver: {
      id: 122,
      name: "Laura\u00A0Smith",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      number: "+8801734445556"
    },
    isFavorite: true,
    ratingResult: [{ type: 5, count: 12 }, { type: 4, count: 5 }, { type: 2, count: 1 }],
    price: 1750,
    priceFlag: 'bdt',
    location: { lat: "22.7010", long: "90.3535" },
    totalTrip: 110,
    totalReviews: 17,
    vehicle: {
      id: 222,
      type: 'open',
      capacity: "২.৫\u00A0টন",
      length: "৭\u00A0ফুট",
      width: "৫\u00A0ফুট",
      registrationNumber: "বরিশাল‑V2345",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'CNG',
      notes: ""
    },
    totalRating: 4.5
  },
  {
    id: 123,
    driver: {
      id: 123,
      name: "Peter\u00A0Parker",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      number: "+8801745556667"
    },
    isFavorite: false,
    ratingResult: [{ type: 5, count: 9 }, { type: 4, count: 3 }],
    price: 1600,
    priceFlag: 'bdt',
    location: { lat: "25.7439", long: "89.2752" },
    totalTrip: 100,
    totalReviews: 13,
    vehicle: {
      id: 223,
      type: 'flatbed',
      capacity: "৪\u00A0টন",
      length: "৯\u00A0ফুট",
      width: "৬\u00A0ফুট",
      registrationNumber: "রংপুর‑W3456",
      hasLiftGate: true,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.2
  },
  {
    id: 124,
    driver: {
      id: 124,
      name: "মিতা\u00A0আক্তার",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      number: "+8801756667778"
    },
    isFavorite: true,
    ratingResult: [{ type: 5, count: 7 }, { type: 3, count: 2 }],
    price: 1500,
    priceFlag: 'bdt',
    location: { lat: "24.8496", long: "89.3710" },
    totalTrip: 85,
    totalReviews: 11,
    vehicle: {
      id: 224,
      type: 'closed',
      capacity: "৩\u00A0টন",
      length: "৭.৫\u00A0ফুট",
      width: "৫.৫\u00A0ফুট",
      registrationNumber: "বগুড়া‑X4567",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.0
  },
  {
    id: 125,
    driver: {
      id: 125,
      name: "Steven\u00A0Clark",
      image: "https://randomuser.me/api/portraits/men/34.jpg",
      number: "+8801767778889"
    },
    isFavorite: false,
    ratingResult: [{ type: 4, count: 8 }, { type: 2, count: 2 }],
    price: 1800,
    priceFlag: 'bdt',
    location: { lat: "23.8103", long: "90.4125" },
    totalTrip: 120,
    totalReviews: 15,
    vehicle: {
      id: 225,
      type: 'tanker',
      capacity: "৬\u00A0টন",
      length: "১০\u00A0ফুট",
      width: "৭\u00A0ফুট",
      registrationNumber: "ঢাকা‑Y5678",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.4
  },
  {
    id: 126,
    driver: {
      id: 126,
      name: "নবীন\u00A0চৌধুরি",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
      number: "+8801778889990"
    },
    isFavorite: false,
    ratingResult: [{ type: 5, count: 6 }, { type: 4, count: 2 }],
    price: 1400,
    priceFlag: 'bdt',
    location: { lat: "22.3569", long: "91.7832" },
    totalTrip: 70,
    totalReviews: 9,
    vehicle: {
      id: 226,
      type: 'open',
      capacity: "২\u00A0টন",
      length: "৬\u00A0ফুট",
      width: "৫\u00A0ফুট",
      registrationNumber: "চট্টগ্রাম‑Z6789",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'CNG',
      notes: ""
    },
    totalRating: 4.1
  },
  {
    id: 127,
    driver: {
      id: 127,
      name: "Olivia\u00A0Davis",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
      number: "+8801789990001"
    },
    isFavorite: true,
    ratingResult: [{ type: 5, count: 10 }, { type: 3, count: 3 }],
    price: 1700,
    priceFlag: 'bdt',
    location: { lat: "24.8949", long: "91.8687" },
    totalTrip: 105,
    totalReviews: 14,
    vehicle: {
      id: 227,
      type: 'refrigerated',
      capacity: "৩\u00A0টন",
      length: "৮\u00A0ফুট",
      width: "৬\u00A0ফুট",
      registrationNumber: "সিলেট‑A2345",
      hasLiftGate: false,
      airConditioned: true,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.5
  },
  {
    id: 128,
    driver: {
      id: 128,
      name: "রাজু\u00A0আব্দুল",
      image: "https://randomuser.me/api/portraits/men/37.jpg",
      number: "+8801701112223"
    },
    isFavorite: false,
    ratingResult: [{ type: 4, count: 7 }, { type: 2, count: 1 }],
    price: 1550,
    priceFlag: 'bdt',
    location: { lat: "24.3636", long: "88.6241" },
    totalTrip: 80,
    totalReviews: 10,
    vehicle: {
      id: 228,
      type: 'flatbed',
      capacity: "২.৫\u00A0টন",
      length: "৭.৫\u00A0ফুট",
      width: "৫.৫\u00A0ফুট",
      registrationNumber: "রাজশাহী‑B3456",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.0
  },
  {
    id: 129,
    driver: {
      id: 129,
      name: "Henry\u00A0Miller",
      image: "https://randomuser.me/api/portraits/men/38.jpg",
      number: "+8801712223334"
    },
    isFavorite: false,
    ratingResult: [{ type: 5, count: 13 }, { type: 4, count: 5 }],
    price: 1850,
    priceFlag: 'bdt',
    location: { lat: "22.8456", long: "89.5403" },
    totalTrip: 125,
    totalReviews: 18,
    vehicle: {
      id: 229,
      type: 'closed',
      capacity: "৪\u00A0টন",
      length: "৯\u00A0ফুট",
      width: "৬\u00A0ফুট",
      registrationNumber: "খুলনা‑C4567",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.5
  },
  {
    id: 130,
    driver: {
      id: 130,
      name: "রফিক\u00A0উদ্দিন",
      image: "https://randomuser.me/api/portraits/men/39.jpg",
      number: "+8801723334445"
    },
    isFavorite: true,
    ratingResult: [{ type: 4, count: 6 }, { type: 3, count: 2 }],
    price: 1650,
    priceFlag: 'bdt',
    location: { lat: "22.7010", long: "90.3535" },
    totalTrip: 95,
    totalReviews: 13,
    vehicle: {
      id: 230,
      type: 'open',
      capacity: "৩\u00A0টন",
      length: "৮\u00A0ف ফুট",
      width: "৬\u00A0ফুট",
      registrationNumber: "বরিশাল‑D5678",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'CNG',
      notes: ""
    },
    totalRating: 4.2
  },
  {
    id: 131,
    driver: {
      id: 131,
      name: "Sophia\u00A0Taylor",
      image: "https://randomuser.me/api/portraits/women/40.jpg",
      number: "+8801734445556"
    },
    isFavorite: false,
    ratingResult: [{ type: 5, count: 11 }, { type: 2, count: 1 }],
    price: 1750,
    priceFlag: 'bdt',
    location: { lat: "25.7439", long: "89.2752" },
    totalTrip: 110,
    totalReviews: 16,
    vehicle: {
      id: 231,
      type: 'flatbed',
      capacity: "৪\u00A0টন",
      length: "৯\u00A0ফুট",
      width: "৬\u00A0ফুট",
      registrationNumber: "রংপুর‑E6789",
      hasLiftGate: true,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.4
  },
  {
    id: 132,
    driver: {
      id: 132,
      name: "আতিক\u00A0হোসেন",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      number: "+8801745556667"
    },
    isFavorite: true,
    ratingResult: [{ type: 5, count: 9 }, { type: 4, count: 3 }],
    price: 1450,
    priceFlag: 'bdt',
    location: { lat: "24.8496", long: "89.3710" },
    totalTrip: 85,
    totalReviews: 12,
    vehicle: {
      id: 232,
      type: 'closed',
      capacity: "২\u00A0টন",
      length: "৭.৫\u00A0ফুট",
      width: "৫.৫\u00A0ফুট",
      registrationNumber: "বগুড়া‑F7890",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.1
  },
  {
    id: 133,
    driver: {
      id: 133,
      name: "William\u00A0Johnson",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      number: "+8801756667778"
    },
    isFavorite: false,
    ratingResult: [{ type: 4, count: 7 }, { type: 3, count: 1 }],
    price: 1550,
    priceFlag: 'bdt',
    location: { lat: "23.8103", long: "90.4125" },
    totalTrip: 100,
    totalReviews: 14,
    vehicle: {
      id: 233,
      type: 'tanker',
      capacity: "৫\u00A0টন",
      length: "১০\u00A0ফুট",
      width: "৭\u00A0ফুট",
      registrationNumber: "ঢাকা‑G8901",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.3
  },
  {
    id: 134,
    driver: {
      id: 134,
      name: "নিলু\u00A0আসমা",
      image: "https://randomuser.me/api/portraits/women/43.jpg",
      number: "+8801767778889"
    },
    isFavorite: true,
    ratingResult: [{ type: 5, count: 8 }, { type: 4, count: 2 }],
    price: 1400,
    priceFlag: 'bdt',
    location: { lat: "22.3569", long: "91.7832" },
    totalTrip: 75,
    totalReviews: 10,
    vehicle: {
      id: 234,
      type: 'open',
      capacity: "২.৫\u00A0টন",
      length: "৬\u00A0ফুট",
      width: "৫\u00A0ফুট",
      registrationNumber: "চট্টগ্রাম‑H9012",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'CNG',
      notes: ""
    },
    totalRating: 4.2
  },
  {
    id: 135,
    driver: {
      id: 135,
      name: "Grace\u00A0Wilson",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      number: "+8801778889990"
    },
    isFavorite: false,
    ratingResult: [{ type: 5, count: 12 }, { type: 3, count: 2 }],
    price: 1650,
    priceFlag: 'bdt',
    location: { lat: "24.8949", long: "91.8687" },
    totalTrip: 115,
    totalReviews: 17,
    vehicle: {
      id: 235,
      type: 'refrigerated',
      capacity: "৩\u00A0টন",
      length: "৮\u00A0ফুট",
      width: "৬\u00A0ফুট",
      registrationNumber: "সিলেট‑I0123",
      hasLiftGate: false,
      airConditioned: true,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.6
  },
  {
    id: 136,
    driver: {
      id: 136,
      name: "সুলতানা\u00A0খাতুন",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      number: "+8801789990001"
    },
    isFavorite: true,
    ratingResult: [{ type: 4, count: 6 }, { type: 2, count: 1 }],
    price: 1500,
    priceFlag: 'bdt',
    location: { lat: "24.3636", long: "88.6241" },
    totalTrip: 95,
    totalReviews: 12,
    vehicle: {
      id: 236,
      type: 'flatbed',
      capacity: "২\u00A0টন",
      length: "৭.৫\u00A0ফুট",
      width: "৫.৫\u00A0ফুট",
      registrationNumber: "রাজশাহী‑J1234",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.0
  },
  {
    id: 137,
    driver: {
      id: 137,
      name: "James\u00A0Anderson",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      number: "+8801701112223"
    },
    isFavorite: false,
    ratingResult: [{ type: 5, count: 14 }, { type: 4, count: 5 }, { type: 3, count: 2 }],
    price: 2000,
    priceFlag: 'bdt',
    location: { lat: "22.8456", long: "89.5403" },
    totalTrip: 160,
    totalReviews: 21,
    vehicle: {
      id: 237,
      type: 'closed',
      capacity: "৫\u00A0টন",
      length: "৯\u00A0ফুট",
      width: "৬\u00A0ফুট",
      registrationNumber: "খুলনা‑K2345",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.7
  },
  {
    id: 138,
    driver: {
      id: 138,
      name: "রিনা\u00A0হাসান",
      image: "https://randomuser.me/api/portraits/women/47.jpg",
      number: "+8801712223334"
    },
    isFavorite: true,
    ratingResult: [{ type: 5, count: 10 }, { type: 3, count: 2 }],
    price: 1800,
    priceFlag: 'bdt',
    location: { lat: "22.7010", long: "90.3535" },
    totalTrip: 130,
    totalReviews: 15,
    vehicle: {
      id: 238,
      type: 'open',
      capacity: "৩\u00A0টন",
      length: "৮\u00A0ফুট",
      width: "৬\u00A0ফুট",
      registrationNumber: "বরিশাল‑L3456",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'CNG',
      notes: ""
    },
    totalRating: 4.4
  },
  {
    id: 139,
    driver: {
      id: 139,
      name: "Kevin\u00A0White",
      image: "https://randomuser.me/api/portraits/men/48.jpg",
      number: "+8801723334445"
    },
    isFavorite: false,
    ratingResult: [{ type: 4, count: 8 }, { type: 2, count: 1 }],
    price: 1700,
    priceFlag: 'bdt',
    location: { lat: "25.7439", long: "89.2752" },
    totalTrip: 120,
    totalReviews: 16,
    vehicle: {
      id: 239,
      type: 'flatbed',
      capacity: "৪\u00A0টন",
      length: "৯\u00A0ফুট",
      width: "৬\u00A0ফুট",
      registrationNumber: "রংপুর‑M4567",
      hasLiftGate: true,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.2
  },
  {
    id: 140,
    driver: {
      id: 140,
      name: "নিরুপম\u00A0চক্রবর্তী",
      image: "https://randomuser.me/api/portraits/men/49.jpg",
      number: "+8801734445556"
    },
    isFavorite: false,
    ratingResult: [{ type: 5, count: 9 }, { type: 4, count: 4 }],
    price: 1600,
    priceFlag: 'bdt',
    location: { lat: "24.8496", long: "89.3710" },
    totalTrip: 110,
    totalReviews: 14,
    vehicle: {
      id: 240,
      type: 'closed',
      capacity: "৩\u00A0টন",
      length: "৭.৫\u00A0ফুট",
      width: "৫.৫\u00A0ফুট",
      registrationNumber: "বগুড়া‑N5678",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.3
  },
  {
    id: 141,
    driver: {
      id: 141,
      name: "Sophia\u00A0Clark",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      number: "+8801745556667"
    },
    isFavorite: true,
    ratingResult: [{ type: 5, count: 12 }, { type: 2, count: 1 }],
    price: 1750,
    priceFlag: 'bdt',
    location: { lat: "23.8103", long: "90.4125" },
    totalTrip: 125,
    totalReviews: 17,
    vehicle: {
      id: 241,
      type: 'tanker',
      capacity: "৫\u00A0টন",
      length: "১০\u00A0ফুট",
      width: "৭\u00A0ফুট",
      registrationNumber: "ঢাকা‑O6789",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'diesel',
      notes: ""
    },
    totalRating: 4.5
  },
  {
    id: 142,
    driver: {
      id: 142,
      name: "Rahim\u00A0Haque",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
      number: "+8801756667778"
    },
    isFavorite: false,
    ratingResult: [{ type: 4, count: 7 }, { type: 3, count: 1 }],
    price: 1550,
    priceFlag: 'bdt',
    location: { lat: "22.3569", long: "91.7832" },
    totalTrip: 95,
    totalReviews: 11,
    vehicle: {
      id: 242,
      type: 'open',
      capacity: "২.৫\u00A0টন",
      length: "৬\u00A0ফুট",
      width: "৫\u00A0ফুট",
      registrationNumber: "চট্টগ্রাম‑P7890",
      hasLiftGate: false,
      airConditioned: false,
      fuelType: 'CNG',
      notes: ""
    },
    totalRating: 4.0
  }
];

export {biddingList};
