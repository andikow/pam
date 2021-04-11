import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {Col, grow, Grid} from 'react-native-easy-grid';

const styles = StyleSheet.create({
    harga : {
        fontSize: 12,
        borderRadius: 10,
        paddingRight: 4,
        paddingLeft: 2,
        textAlign: 'center',
        backgroundColor : '#1e90ff',
        marginRight: 266,
        marginLeft: 20,
        color: '#fff'
    },
})

export default class Home extends Component {
    static navigationOptions = ({navigation})=>{
        return {
            headerStyle : {
                backgroundColor : '#6D73B5'
        },
        headerTintColor : '#fff'
    }
}
    render() {
        return (
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 17, paddingLeft: 35, paddingTop: 10}}>Rini Susanti </Text>
                <Text style={{color: '#a9a9a9', fontSize: 12, paddingLeft: 20, paddingTop: 5}}>1x Kain Panjang</Text>
                <Text style={{color: '#000', fontSize: 12, paddingLeft: 20, paddingTop: 5, paddingBottom: 10}}>Dibayar Hari ini, 18:49 </Text>
                <Text style={styles.harga}>
                    Rp 200.000
                </Text>
                <View
                    style={{
                        borderBottomColor: '#dcdcdc',
                        borderBottomWidth: 1,
                        paddingTop: 10
                    }} />
            </View>
        );
    }
};