import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import bannerImage from '../../../media/temp/banner.jpg';

const { width } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        const {moneyD} = this.props;
        const { wrapper, textStyle, imageStyle } = styles;
        return (
            <View style={wrapper}>
                
                <View style={{ height: 50, justifyContent: 'center', alignItems:'center' }}>
                    <Text style={textStyle} >DOANH THU NGÀY</Text>
                </View>
                <View style={{ height: 50, justifyContent: 'center',alignItems:'center' }}>
                    <Text style={textStyle} >{moneyD}</Text>
                </View>
                {/* <TouchableOpacity style={{ flex: 4, justifyContent: 'center' }}>
                <Text style={{textStyle}}>DOANH THU</Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}
//933 x 465
const imageWidth = width - 150;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        justifyContent:'space-around',
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight, 
        width: imageWidth
    }
});