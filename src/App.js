import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './components/Counter';
import reducers from './reducers';

// eslint-disable-next-line arrow-body-style
const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <Counter />
            </View>
        </Provider>
    );
};


export default App;
