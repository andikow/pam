import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';

const styles = StyleSheet.create({
    Resi : {
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
                <Text style={{fontWeight: 'bold', fontSize: 17, paddingLeft: 35, paddingTop: 10}}>Waldio </Text>
                <Text style={{color: '#a9a9a9', fontSize: 12, paddingLeft: 20, paddingTop: 5}}>2x Sarung Wadimor dan lainnya</Text>
                <Text style={{color: '#6D73B5', fontSize: 12, paddingLeft: 20, paddingTop: 5, paddingBottom: 10}}>Kode booking JNE berhasil dibuat, silahkan bawa paket ke counter JNE terdekat </Text>
                <Text style={styles.Resi}>
                    WDJC221C
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