import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider, useTailwind } from 'tailwind-rn/dist';
import EntryScreen from './screens/entry-screen';

import utiilities from "./tailwind.json"

export default function App() {
  const tailwind = useTailwind();

  console.log(tailwind("bg-red-500"));

  return (
    <TailwindProvider utilities={utiilities}>
      <View style={styles.container}>
      <Text style={tailwind("text-red-500")}>Open up App.js to start working on your app one yello!</Text>
      <EntryScreen />
      <StatusBar style="auto" />
    </View>
    </TailwindProvider>
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
