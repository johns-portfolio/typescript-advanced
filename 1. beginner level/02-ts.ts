// let myName: string = "John";
// //
// // 100 lines later
// //
// myName = true;
// //
// //
// myName = ["John"];

// // ### basic type
// let age: number = 22
// let isCustomer: boolean = true
// let customerData: {
//   fName: string
//   age: number
// } = {
//   fName: 'John',
//   age: 22,
// }
// let fibonacciList: number[] = [1,2,3,5,8]

// // infer type
// let age = 22
// let isCustomer = true
// let customerData = {
//   fName: 'John',
//   age: 22,
// }
// let fibonacciList = [1, 2, 3, 5, 8]
// fibonacciList.push(13)

// // Literal type
// let age: 22 = 22
// age = 23
// age = 22
// let myName: "John" = "John";
// myName = "Jame"

// let address: {
//   province: 'Bangkok'
// } = {
//   province: 'Bangkok',
// }
// address.province = 'What'
// address.province = 'Bangkok'

// // Union type
// let customerType: 'online' | 'loyalty' = 'online'
// customerType = 'what'
// customerType = 'loyalty'
// customerType = 'online'

// let address: {
//   province: 'Bangkok' | 'Puket'
// } = {
//   province: 'Bangkok',
// }
// address.province = 'What'
// address.province = 'Puket'

// // Alias type
// let customerData: {
//   fName: string
//   age: number
// } = {
//   fName: 'John',
//   age: 22,
// }

// type CustomerData = {
//   fName: string;
//   age: number;
// };
// let c1: CustomerData = {
//   fName: "John",
//   age: 22,
// };
// let c2: CustomerData = {
//   fName: "John",
//   age: 22,
// };

// type CustomerType = "online" | "customer" | "guest";
// let a: CustomerType = 'customer'
// let b: CustomerType = 'online'

// // Intersection type
// type Customer = {
//     name: string
// }
// type LoyaltyCustomer = Customer & {
//     age: number
// }
// let cus1: LoyaltyCustomer = {
//     name: 'John',
//     age: 22
// }

// Congratulation!! You passed Basic TypeScript level
