import { IReview } from "@bidding_modules/types/bidding-list";
import { IUid } from "@type/global";

// const driverReviews: Record<IUid, IReview[]> = {
//   101: [
//     {id: 1001, dateTime: '2025-01-01T10:20:30Z', note: 'this is for testing', rating: 2, tags: [{title: 'test', uid: 123}]},
//     {id: 1002, dateTime: '2025-01-01T10:20:30Z', note: 'this is for testing 1', rating: 1, tags: [{title: 'test 1', uid: 122}]},
//     {id: 1003, dateTime: '2025-01-01T10:20:30Z', note: 'this is for testing 2', rating: 5, tags: [{title: 'test 2', uid: 123}]},
//     {id: 1004, dateTime: '2025-01-01T10:20:30Z', note: 'this is for testing 3', rating: 5, tags: [{title: 'test 4', uid: 124}, {title: 'test 14', uid: 1214}]},
//     {id: 1005, dateTime: '2025-01-01T10:20:30Z', note: 'this is for testing 4', rating: 3, tags: [{title: 'test 4', uid: 126}]},
//     {id: 1006, dateTime: '2025-01-01T10:20:30Z', note: 'this is for testing 5', rating: 4, tags: [{title: 'test 5', uid: 127}]},
//     {id: 1007, dateTime: '2025-01-01T10:20:30Z', note: 'this is for testing 6', rating: 3, tags: [{title: 'test 6', uid: 128}]},
//     {id: 1008, dateTime: '2025-02-02T10:20:30Z', note: 'this is for testing 7', rating: 2, tags: [{title: 'test 7', uid: 129}]},
//   ],
//   104: [],
//   106: [],
//   108: [],
// };

const driverReviews: Record<IUid, IReview[]> = {
  101: [
    {id: 1001, dateTime: '2025-01-01T10:20:30Z', note: 'চালক\u00A0খুব\u00A0ভালো', rating: 5, tags: [{uid: 1, title: 'good'}, {uid: 2, title: 'smooth'}]},
    {id: 1002, dateTime: '2025-01-02T12:15:30Z', note: 'গাড়ি\u00A0পরিষ্কার\u00A0ছিল', rating: 4, tags: []},
    {id: 1003, dateTime: '2025-01-03T09:30:30Z', note: 'দ্রুত\u00A0যাত্রা\u00A0করেছেন', rating: 5, tags: [{uid: 3, title: 'দ্রুত'}]},
    {id: 1004, dateTime: '2025-01-04T15:10:30Z', note: 'চালক\u00A0দয়া\u00A0পূর্ণ', rating: 5, tags: [{uid: 4, title: 'gentle'}, {uid: 5, title: 'helpful'}, {uid: 6, title: 'ভদ্র'}]},
    {id: 1005, dateTime: '2025-01-05T08:45:30Z', note: 'সেবা\u00A0মোটামুটি', rating: 3, tags: [{uid: 7, title: 'average'}]},
    {id: 1006, dateTime: '2025-01-06T11:20:30Z', note: 'দৈনন্দিন\u00A0যাত্রার\u00A0জন্য\u00A0উপযুক্ত', rating: 4, tags: [{uid: 8, title: 'routine'}, {uid: 9, title: 'ভালো'}, {uid: 10, title: 'comfortable'}]},
    {id: 1007, dateTime: '2025-01-07T14:50:30Z', note: 'গাড়ি\u00A0সুবিধা\u00A0মতো', rating: 4, tags: [{uid: 11, title: 'সুবিধাজনক'}]},
    {id: 1008, dateTime: '2025-01-08T10:05:30Z', note: 'চালক\u00A0অনুভূতিশীল', rating: 5, tags: []},
    {id: 1009, dateTime: '2025-01-09T09:20:30Z', note: 'গাড়ি\u00A0পুরোনো\u00A0ছিল', rating: 2, tags: [{uid: 12, title: 'পুরোনো'}, {uid: 13, title: 'old'}]},
    {id: 1010, dateTime: '2025-01-10T13:15:30Z', note: 'মধ্যম\u00A0সেবা', rating: 3, tags: [{uid: 14, title: 'average'}, {uid: 15, title: 'mediocre'}]},
  ],
  102: [
    {id: 2001, dateTime: '2025-02-01T10:20:30Z', note: 'চালক\u00A0খুব\u00A0দয়া\u00A0পূর্ণ', rating: 5, tags: [{uid: 16, title: 'gentle'}]},
    {id: 2002, dateTime: '2025-02-02T12:30:30Z', note: 'গাড়ি\u00A0পরিষ্কার\u00A0না', rating: 2, tags: []},
    {id: 2003, dateTime: '2025-02-03T11:20:30Z', note: 'যাত্রা\u00A0সাধারণ', rating: 3, tags: [{uid: 17, title: 'average'}]},
    {id: 2004, dateTime: '2025-02-04T14:10:30Z', note: 'চালক\u00A0বন্ধুত্বপূর্ণ', rating: 4, tags: [{uid: 18, title: 'friendly'}, {uid: 19, title: 'বন্ধুত্বপূর্ণ'}]},
    {id: 2005, dateTime: '2025-02-05T09:45:30Z', note: 'গাড়ি\u00A0ভালো', rating: 4, tags: [{uid: 20, title: 'good'}]},
  ],
  103: [
      {id: 3001, dateTime: '2025-03-01T10:20:30Z', note: 'সেবা\u00A0খারাপ', rating: 1, tags: [{uid: 1, title: 'bad'}]},
      {id: 3002, dateTime: '2025-03-02T12:15:30Z', note: 'চালক\u00A0ভালো', rating: 5, tags: [{uid: 2, title: 'good'}, {uid: 3, title: 'ভদ্র'}]},
      {id: 3003, dateTime: '2025-03-03T09:30:30Z', note: 'গাড়ি\u00A0সুবিধাজনক', rating: 4, tags: [{uid: 4, title: 'comfortable'}]},
      {id: 3004, dateTime: '2025-03-04T11:10:30Z', note: 'দ্রুত\u00A0যাত্রা', rating: 5, tags: [{uid: 5, title: 'fast'}, {uid: 6, title: 'দ্রুত'}]},
      {id: 3005, dateTime: '2025-03-05T08:50:30Z', note: 'গাড়ি\u00A0পুরোনো', rating: 2, tags: []},
  ],
  105: [
    {id: 5001, dateTime: '2025-05-01T10:20:30Z', note: 'চালক\u00A0খুব\u00A0মেহনতী', rating: 5, tags: [{uid: 7, title: 'hardworking'}]},
    {id: 5002, dateTime: '2025-05-02T12:15:30Z', note: 'গাড়ি\u00A0ভালো\u00A0নেই', rating: 2, tags: [{uid: 8, title: 'poor'}]},
    {id: 5003, dateTime: '2025-05-03T09:30:30Z', note: 'যাত্রা\u00A0মাঝারি', rating: 3, tags: [{uid: 9, title: 'average'}, {uid: 10, title: 'সাধারণ'}]},
    {id: 5004, dateTime: '2025-05-04T15:10:30Z', note: 'চালক\u00A0ধীর', rating: 4, tags: []},
    {id: 5005, dateTime: '2025-05-05T11:50:30Z', note: 'সেবা\u00A0ভালো', rating: 4, tags: [{uid: 11, title: 'good'}, {uid: 12, title: 'ভালো'}]},
  ],
  108: [
    {id: 8001, dateTime: '2025-06-01T10:20:30Z', note: 'চালক\u00A0খুব\u00A0সতর্ক', rating: 5, tags: [{uid: 13, title: 'careful'}]},
    {id: 8002, dateTime: '2025-06-02T12:15:30Z', note: 'গাড়ি\u00A0পরিষ্কার\u00A0ছিল', rating: 4, tags: [{uid: 14, title: 'clean'}, {uid: 15, title: 'পরিষ্কার'}]},
    {id: 8003, dateTime: '2025-06-03T09:30:30Z', note: 'দ্রুত\u00A0যাত্রা', rating: 5, tags: [{uid: 16, title: 'fast'}]},
    {id: 8004, dateTime: '2025-06-04T11:10:30Z', note: 'সেবা\u00A0মোটামুটি', rating: 3, tags: []},
    {id: 8005, dateTime: '2025-06-05T08:50:30Z', note: 'চালক\u00A0ভদ্র', rating: 5, tags: [{uid: 17, title: 'polite'}, {uid: 18, title: 'ভদ্র'}]},
  ],
  112: [
    {id: 12001, dateTime: '2025-10-01T10:20:30Z', note: 'চালক\u00A0দ্রুত', rating: 4, tags: [{uid: 19, title: 'fast'}]},
    {id: 12002, dateTime: '2025-10-02T12:15:30Z', note: 'গাড়ি\u00A0পরিষ্কার', rating: 4, tags: [{uid: 20, title: 'clean'}]},
    {id: 12003, dateTime: '2025-10-03T09:30:30Z', note: 'যাত্রা\u00A0সুন্দর', rating: 5, tags: [{uid: 21, title: 'smooth'}, {uid: 22, title: 'ভালো'}]},
    {id: 12004, dateTime: '2025-10-04T11:10:30Z', note: 'চালক\u00A0বন্ধুত্বপূর্ণ', rating: 5, tags: [{uid: 23, title: 'friendly'}, {uid: 24, title: 'বন্ধুত্বপূর্ণ'}]},
    {id: 12005, dateTime: '2025-10-05T08:50:30Z', note: 'গাড়ি\u00A0পুরোনো', rating: 2, tags: []},
  ],
};


export {driverReviews};
