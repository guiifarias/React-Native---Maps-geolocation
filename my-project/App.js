
import { StyleSheet, Text, View } from 'react-native';
import Local from './src/Components/geolocalização'

export default function App() {
  return (
    <View>
      <Local/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
