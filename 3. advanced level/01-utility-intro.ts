// // Require field vs optional field
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
// type Customer = {
//     id: string
//     name: {
//       firstName: string
//       lastName: string
//     }
//     age: number
//     address: {
//       province: string
//       moo: string
//     }
//   }
// type Address = Customer['address']
// type NameType = Customer['name']

// // in
// type Color = 'red' | 'green' | 'blue'
// type ColorData = {
//     [F in Color]: string
// }

// const colors: ColorData = {
//     red: '#ff0000',
//     green: '#00ffff',
//     blue: '#0000ff',
//     pink: '#ffff00'
// }

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

// const patchData = (id: string, data: PatchCustomerData) => {
//   // TODO
// }
