// // ## const
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
// }
// const appConfig: AppConfig = {
//   appName: 'Customer App',
//   timeout: 60,
// }
// appConfig.appName = 'What'
// appConfig.appName = 'Customer App'
// appConfig.timeout = 120

// const fibonacciList: readonly number[] = [1, 2, 3, 5, 8]
// fibonacciList[0] = 100
// fibonacciList.push(13)

// // ## as const
// const appConfig = {
//   appName: 'Customer App',
//   timeout: 60,
// } as const
// appConfig.appName = 'What'
// appConfig.appName = 'Customer App'
// appConfig.timeout = 120

// const fibonacciList = [1, 2, 3, 5, 8] as const
// fibonacciList[0] = 100
// fibonacciList.push(13)

// ## keyof
// type AppConfig = {
//   appName: string
//   timeout: number
//   env: string
// }

// type Field = 'appName' | 'timeout' | 'env'
// type Field = keyof AppConfig
// const f1: Field = 'appName'

// // ## typeof
// const appConfig = {
//   appName: 'Customer App',
//   timeout: 60,
//   env: 'PROD',
// }

// type AppConfig = typeof appConfig
