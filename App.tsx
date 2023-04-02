import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'

import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import createTables from './src/utils/createTables'
import db from './src/utils/openDatabase'

const UrgeWithPleasureComponent = () => (
  <CountdownCircleTimer
    isPlaying
    duration={7}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => <Text>{remainingTime}</Text>}
  </CountdownCircleTimer>
)

export default function App() {
  React.useEffect(() => {
    createTables()

    db.transaction(
      (tx) => {
        tx.executeSql(
          `INSERT INTO pomodoros (id, date, count) VALUES (?, ?, ?);`,
          [1, '2023-04-02', 5],
          () => {
            // 成功時のコールバック
            console.log('INSERT TABLE Success.')
          },
          () => {
            // 失敗時のコールバック
            console.log('INSERT TABLE Failed.')
            return true // return true でロールバックする
          }
        )

        // 実行したいSQL
        tx.executeSql(
          'SELECT * FROM pomodoros;',
          [],
          (_, resultSet) => {
            console.log(resultSet.rows.item(0))
          },
          () => {
            // 失敗時のコールバック
            console.log('SELECT TABLE Failed.')
            return false // return true でロールバックする
          }
        )
      },
      () => {
        console.log('Failed All.')
      },
      () => {
        console.log('Success All.')
      }
    )
    return () => {}
  }, [])
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <UrgeWithPleasureComponent />
      <StatusBar style="auto" />
    </View>
  )
}
