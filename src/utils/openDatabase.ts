import * as FileSystem from 'expo-file-system'
import * as SQLite from 'expo-sqlite'
import { Asset } from 'expo-asset'
import { DB_NAME, SQLITE_VERSION } from '@env'

// async function openDatabase(
//   pathToDatabaseFile: string,
//   version: string = '1.0'
// ): Promise<SQLite.WebSQLDatabase> {
//   if (
//     !(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite'))
//       .exists
//   ) {
//     await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite')
//   }
//   // await FileSystem.downloadAsync(
//   //   Asset.fromModule(require(pathToDatabaseFile)).uri,
//   //   FileSystem.documentDirectory + 'SQLite/myDatabaseName.db'
//   // )
//   // console.log('FileSystem; ' + FileSystem.documentDirectory)
//   return SQLite.openDatabase(pathToDatabaseFile, version)
// }

console.log('dbName: ' + DB_NAME)
console.log('version: ' + SQLITE_VERSION)
const db = SQLite.openDatabase(DB_NAME, SQLITE_VERSION)

export default db
