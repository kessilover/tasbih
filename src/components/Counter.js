import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { updateCounter, resetCounter } from '../actions';
import ButtonPlus from './ButtonPlus';
import ButtonReset from './ButtonReset';
import TextInput from './TextInput';


class Counter extends Component {
    onIncrementingCounter() {
        this.props.updateCounter();
    }

    onResetCounter() {
        this.props.resetCounter();
    }

    render() {
        const { containerStyle } = styles;
        return (
            <View style={containerStyle}>
                <ButtonReset onPress={this.onResetCounter.bind(this)} />
                <TextInput>
                    {this.props.count}
                </TextInput>
                <ButtonPlus onPress={this.onIncrementingCounter.bind(this)}>+</ButtonPlus>                        
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

const mapStateToProps = (state) => {
    
    return { count: state.counter.count };
};

export default connect(mapStateToProps, { updateCounter, resetCounter })(Counter);

