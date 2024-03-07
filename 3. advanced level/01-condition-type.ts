// // extends
// type OnlineCustomer = {
//   name: string
//   tel: string
// }

// type LoyaltyCustomer = {
//   name: string
//   coin: number
// }

// type OnlineType = 'online'
// type LoyaltyType = 'loyalty'
// type CustomerType = OnlineType | LoyaltyType

// // // ex. 1
// type LotusCustomer<T extends CustomerType> = T extends LoyaltyType
//   ? LoyaltyCustomer
//   : OnlineCustomer

// const myCust: LotusCustomer<LoyaltyType> = {
//   name: 'John',
//   coin: 1_000_000
// }
// const myCust2: LotusCustomer<OnlineType> = {
//   name: 'John',
//   tel: '081-222-3333'
// }
// const myCust3: LotusCustomer<'online'> = {
//     name: 'John',
//     tel: '081-222-3333'
//   }
// const myCust4: LotusCustomer<number> = {}
