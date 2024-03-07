// // ## const
// let appName1: string = 'Customer App'
// appName1 = 'What'

// const appName: string = 'Customer App'
// appName = 'What'

// type AppConfig = {
//   appName: string
// }
// const appConfig: AppConfig = {
//   appName: 'Customer App',
// }
// appConfig = {
//   appName: 'Customer App',
// }
// appConfig.appName = 'What'

// const fibonacciList: number[] = [1, 2, 3, 5, 8]
// fibonacciList = [5, 8]
// fibonacciList[0] = 100
// fibonacciList.push(13)

// // ## readonly
// type AppConfig = {
//   readonly appName: string
//   readonly timeout: number
//   readonly dbConnection: {
//      host: string
//   }
// }
// const appConfig: AppConfig = {
//   appName: 'Customer App',
//   timeout: 60,
//   dbConnection: {
//     host: 'xxxx'
//   }
// }
// appConfig.appName = 'What'
// appConfig.appName = 'Customer App'
// appConfig.timeout = 120
// appConfig.dbConnection.host = 'AAAA'

// const fibonacciList: readonly number[] = [1, 2, 3, 5, 8]
// fibonacciList[0] = 100
// fibonacciList.push(13)

// // ## as const
// const appConfig = {
//   appName: 'Customer App',
//   timeout: 60,
//   dbConnection: {
//     host: 'xxxxxx'
//   }
// } as const
// appConfig.appName = 'What'
// appConfig.appName = 'Customer App'
// appConfig.timeout = 120
// appConfig.dbConnection.host = 'uuuuu'

// const fibonacciList = [1, 2, 3, 5, 8] as const
// fibonacciList[0] = 100
// fibonacciList.push(13)

// // ## keyof
// type AppConfig = {
//   appName: string
//   timeout: number
//   env: string
//   db: string
// }

// // type Field = 'appName' | 'timeout' | 'env'
// type Field = keyof AppConfig
// let f1: Field = 'db'
// f1 = 'appname'

// // ## typeof

// // lib.ts
// const appConfig = {
//   appName: 'Customer App',
//   timeout: 60,
//   env: 'PROD',
// }

// type AppConfig = typeof appConfig
