import React from 'react';
import { View } from 'react-native';
import Counter from './components/Counter';

// eslint-disable-next-line arrow-body-style
const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <Counter />
        </View>
    );
};


export default App;
