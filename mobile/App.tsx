import 'react-native-gesture-handler';
import { FC } from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';

import { View } from 'react-native';
import { theme } from './src/theme';
import { Widget }  from './src/components/Widget';

const App: FC = () => {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_500Medium })

  if (!fontsLoaded) return <AppLoading />

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>
      <StatusBar
        backgroundColor="transparent"
        style="light"
        translucent
      />

      <Widget />
    </View>
  )
}

export default App
