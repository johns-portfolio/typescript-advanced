// // // # any <=== bad code
// let myName: any = 'John'
// myName = 200
// myName = true
// myName = [2,4,11]

// type ApiResponse = {
//   code: number
//   data: any
// }

// const res1: ApiResponse = {
//   code: 200,
//   data: 10_000_000
// }

// const res2: ApiResponse = {
//   code: 200,
//   data: true
// }

// // # Generic Type
// type ApiResponse<DataType> = {
//   code: number
//   data: DataType
// }

// const res1: ApiResponse<string> = {
//   code: 200,
//   data: 'hello'
// }

// const res2: ApiResponse<boolean> = {
//   code: 200,
//   data: true
// }

// Congratulation!! You passed Intermediate TypeScript level
