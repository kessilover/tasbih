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
        flexGrow: 1,
         alignItems: 'flex-end',
         justifyContent: 'center',
    },
    buttonStyle: {
        backgroundColor: '#c72c41',
        borderColor: '#801336',
        borderRadius: 12,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 10,
        marginTop: 10,
        height: 25,
        width: 25
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10,
    }
    
    }
);

export default ButtonPlus;
