// // // Require field vs optional field
// type Customer = {
//   name: string
//   age: number
//   tel?: string
// }

// const cust: Customer = {
//   name: 'John',
//   age: 22
// }

// // sub type

// // lib.ts
// type Customer = {
//   id: string
//   name: {
//     firstName: string
//     lastName: string
//   }
//   age: number
//   address: {
//     province: string
//     moo: string
//   }
// }
// // type Name = {
// //   firstName: string
// //   lastName: string
// // }

// type Address = Customer['name']

// type NameType = Customer['name']

// // in
// lib.ts
type Color = 'red' | 'green' | 'blue' | 'black'

// type ColorData = {
//   red: string
//   green: string
//   blue: string
//   black: string
// }

type ColorData = {
  [Field in Color]: Field extends 'red' | 'green' ? number : string
}

const colors: ColorData = {
  red: '#ff0000',
  green: '#00ffff',
  blue: '#0000ff',
  blackxx: '#ffff00'
}

// // Hands-on
// type Customer = {
//   id: string
//   name: string
//   tel: string
//   active: boolean
// }
// type Keys = 'id' | 'name' | 'tel' | 'active'
// type Keys = keyof Customer
// type PatchCustomerData = {
//     [F in Keys]?: Customer[F]
// }

// type Patial<T> = {
//     [F in keyof T]?: T[F]
//   }

// type PatchCustomerData = Patial<Customer>

// type PatchCustomerData = {
//     id?: string
//     name?: string
//     tel?: string
//     active?: boolean
// }

// type PatchCustomerData = {
//     [F in keyof Customer]?: Customer[F]
// }

// const patchData = (id: string, data: PatchCustomerData) => {
//   // TODO
// }
