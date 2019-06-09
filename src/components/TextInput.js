import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


// eslint-disable-next-line arrow-body-style
const TextInput = ({ children }) => {
    const { containerStyle, textStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={textStyle}>{children}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    containerStyle: {
        flexGrow: 3,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'red',
         
    },
    textStyle: {
        fontSize: 80,
        color: '#fff'
    }
});

export default TextInput;
