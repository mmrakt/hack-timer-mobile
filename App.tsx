import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

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
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <UrgeWithPleasureComponent />
      <StatusBar style="auto" />
    </View>
  )
}
