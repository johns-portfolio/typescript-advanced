// // // infer

// // lib.ts
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

// type CustomerAddress<T extends { address: any }> = T extends {
//   address: infer R
// }
//   ? R
//   : {}

// const cusAddr: CustomerAddress<OnlineCustomer> = {
//   province: 'Bangkok'
// }

// const cusAddr2: CustomerAddress<LoyaltyCustomer> = {
//   moo: '22',
//   soi: 'A',
//   road: 'Kanjana'
// }

// const cusAddr3: CustomerAddress<{ address: number[] }> = {}
