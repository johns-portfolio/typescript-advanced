// // ## const
// const appName: string = 'Customer App'
// appName = 'What'

// type AppConfig = {
//   appName: string
// }
// const appConfig: AppConfig = {
//   appName: 'Customer App',
// }
// appConfig.appName = 'What'
// appConfig = {
//   appName: 'Customer App',
// }

// const fibonacciList: number[] = [1, 2, 3, 5, 8]
// fibonacciList[0] = 100
// fibonacciList.push(13)
// fibonacciList = [1, 2, 3, 5, 8]

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
// appConfig.timeout = 120

// const fibonacciList: readonly number[] = [1, 2, 3, 5, 8]
// fibonacciList[0] = 100
// fibonacciList.push(13)

// // ## as const
// const appConfigOld = {
//   appName: 'Customer App',
//   timeout: 60,
// }

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

// type AppConfigField = keyof AppConfig
// const f1: AppConfigField = 'timeout'

// // ## typeof
// const appConfig = {
//   appName: 'Customer App',
//   timeout: 60,
//   env: 'PROD',
// }

// type AppConfig = typeof appConfig
