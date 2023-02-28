import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Pomodoro from './src/pages/Pomodoro';

export default function App() {
  return (
    <View style={styles.container}>
      <Pomodoro />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
