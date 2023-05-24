import { StyleSheet, Text, View } from 'react-native';
import Game from './components/Game';
import  'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {



  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Game />
    </GestureHandlerRootView>

  );
}


