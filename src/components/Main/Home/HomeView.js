import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import P_Day from './P_Day';
import P_Month from './P_Month';
import P_Week from './P_Week';

export default class HomeView extends Component {
    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <P_Day />
                <P_Week />
                <P_Month />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})