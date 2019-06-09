import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonPlus from './ButtonPlus';
import ButtonReset from './ButtonReset';
import TextInput from './TextInput';


class Counter extends Component {
    state= { counter: 0 };
    onPress = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    onReset = () => {
        this.setState({ counter: 0 });
    }
    render() {
        const { containerStyle } = styles;
        return (
            <View style={containerStyle}>
                <ButtonReset onPress={this.onReset} />
                <TextInput>
                    {this.state.counter}
                </TextInput>
                <ButtonPlus onPress={this.onPress}>+</ButtonPlus>                        
            </View>
        );
    }

}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#343F4F',

    }
});
export default Counter;

