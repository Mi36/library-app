import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import LibraryList from './src/components/LibraryList';
import reducers from './src/reducers';

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Text>Welcome</Text>
        <LibraryList />
      </View>
    </Provider>
  );
}
