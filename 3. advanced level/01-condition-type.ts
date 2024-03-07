// // // // extends
// type OnlineCustomer = {
//   name: string
//   address: {
//     province: string
//   }
// }

// type LoyaltyCustomer = {
//   name: string
//   address: {
//     moo: string
//     soi: string
//     road: string
//   }
// }

// type CustomerType = 'online' | 'loyalty'

// // // // ex. 1
// type LotusCustomer<T extends CustomerType> = T extends 'loyalty' ? LoyaltyCustomer : OnlineCustomer
// // type LotusCustomer<T extends CustomerType> = T extends 'loyalty' ? LoyaltyCustomer : OnlineCustomer

// const cus1: LotusCustomer<'loyalty'> = {
//   name: 'John',
//   address: {
//     moo: '1',
//     soi: '222A',
//     road: 'Kanjana'
//   }
// }

// const cus2: LotusCustomer<'online'> = {
//   name: 'John',
//   address: {
//     province: 'Bangkok'
//   }
// }
