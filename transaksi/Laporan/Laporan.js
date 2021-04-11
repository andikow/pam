import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    card_body: {
        paddingLeft : 10,
        paddingRight : 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        paddingTop: 10,
        paddingBottom : 15,
        backgroundColor : '#eee'
        },
    text_body: {
        fontSize : 14,
        textAlign: 'center'
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        fontSize: 16,
        width: 220,
        height: 40,
        marginTop: 1050,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#6b52ae',
    }
})
export default class Profile extends Component {
    static navigationOptions = {
        title : 'Laporan Transaksi',
        headerStyle : {
            backgroundColor : '#6b52ae'
        },
        headerTintColor : '#fff',
        headerTitleStyle : {
            fontSize : 18,
            paddingLeft : 30
        }
    }
    render() {
        return (
            <View>
                <View style={styles.card_body}>
                    <Text style={styles.text_body}>
                        Terima Laporan transaksi berdasarkan periode yang diinginkan (maksimal rentang 3 bulan) ke email pemilik toko
                    </Text>
                </View>
                <View>
                    <Text style={{paddingLeft: 50, marginTop:20, fontSize: 12}}>Dari Tanggal</Text>
                </View>
                <View style={styles.screen}>
                    <TouchableOpacity
                        onPress={()=> navigation.push('Search')}
                        style={styles.button}>
                        <Text style={{color: 'white'}}>KIRIM LAPORAN KE EMAIL</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
};
