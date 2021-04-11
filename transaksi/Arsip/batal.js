import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';

const styles = StyleSheet.create({
    
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
            <Image 
                style={{width: 360, height: 650}}
                source={require('../../assets/images/notransaksi.jpg')} />
        );
    }
};