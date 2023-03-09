import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/modules/store';
import {TodosPage} from './src/pages/todos-page/todos-page';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodosPage/>

        <StatusBar style="auto"/>
      </View>
    </Provider>
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
