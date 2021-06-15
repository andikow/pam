import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,} from 'react-native';
import {Col, grow, Grid} from 'react-native-easy-grid';

const styles = StyleSheet.create({
    harga : {
        fontSize: 12,
        borderRadius: 10,
        paddingRight: 4,
        paddingLeft: 2,
        textAlign: 'center',
        backgroundColor : '#ff8c00',
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
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailTransaksi')}>
                <Text style={{fontWeight: 'bold', fontSize: 17, paddingLeft: 20, paddingTop: 10}}>Vandarina (Contoh Transaksi)</Text>
                <Text style={{color: '#a9a9a9', fontSize: 12, paddingLeft: 20, paddingTop: 5}}>1x Kaos Oblong Putih dan Produk lainnya</Text>
                <Text style={{color: '#000', fontSize: 12, paddingLeft: 20, paddingTop: 5, paddingBottom: 10}}>Dibuat 17 Mei, 18:02 </Text>
                <Text style={styles.harga}>
                    Rp 110.000
                </Text>
                <View
                    style={{
                        borderBottomColor: '#dcdcdc',
                        borderBottomWidth: 1,
                        paddingTop: 10
                    }} />

            </TouchableOpacity>
            </View>
        );
    }
};