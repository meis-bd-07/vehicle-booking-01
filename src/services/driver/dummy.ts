import { IReview } from "@bidding_modules/types/bidding-list";
import { IUid } from "@type/global";

const driverReviews: Record<IUid, IReview[]> = {
  101: [
    {id: 1001, dateTime: '2025-01-01T10:20:30Z', note: 'this is for testing', rating: 2, tags: [{title: 'test', uid: 123}]},
    {id: 1002, dateTime: '2025-01-01T10:20:30Z', note: 'this is for testing 1', rating: 1, tags: [{title: 'test 1', uid: 122}]},
    {id: 1003, dateTime: '2025-01-01T10:20:30Z', note: 'this is for testing 2', rating: 5, tags: [{title: 'test 2', uid: 123}]},
    {id: 1004, dateTime: '2025-01-01T10:20:30Z', note: 'this is for testing 3', rating: 5, tags: [{title: 'test 4', uid: 124}, {title: 'test 14', uid: 1214}]},
    {id: 1005, dateTime: '2025-01-01T10:20:30Z', note: 'this is for testing 4', rating: 3, tags: [{title: 'test 4', uid: 126}]},
    {id: 1006, dateTime: '2025-01-01T10:20:30Z', note: 'this is for testing 5', rating: 4, tags: [{title: 'test 5', uid: 127}]},
    {id: 1007, dateTime: '2025-01-01T10:20:30Z', note: 'this is for testing 6', rating: 3, tags: [{title: 'test 6', uid: 128}]},
    {id: 1008, dateTime: '2025-02-02T10:20:30Z', note: 'this is for testing 7', rating: 2, tags: [{title: 'test 7', uid: 129}]},
  ],
  104: [],
  106: [],
  108: [],
};

export {driverReviews};
