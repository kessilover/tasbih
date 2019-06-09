import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const ButtonPlus = ({ onPress, children }) => {
    const { buttonStyle, textStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <TouchableOpacity 
                    onPress={onPress}
                    style={buttonStyle}
            >
                <Text style={textStyle}>
                    {children}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flexGrow: 2,
         //backgroundColor: '#f3f3f3',
         justifyContent: 'center'
    },
    buttonStyle: {
        alignSelf: 'center',
        backgroundColor: '#FC6D6D',
        borderColor: '#FC6D6D',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 25,
        height: 150,
        width: 150,
        borderWidth: 2,
        marginLeft: 5,
        marginRight: 5,
    },
    textStyle: {
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 30,
    }
    
    }
);

export default ButtonPlus;
