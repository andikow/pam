import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Container, Header, StyleProvider, Button } from 'native-base';


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    cardbox:{
        borderColor:'#17a2b8',
        marginTop:20,
        marginBottom:20,
        marginLeft:10,
        marginRight:10,
        padding:10,
        backgroundColor:'#FCE148'
    },
    inputtext:{
        borderBottomColor: '#1E90FF',
        borderBottomWidth: 1,
        marginLeft:20,
        marginRight:20
        
    },
    text:{
        marginLeft:20,
        marginRight:20,
        color:'#696969'
    },
    styleicon:{
        marginTop:10,
        marginLeft:20,
        color:'#224F69',
        marginBottom:10

    },
    btnsSimpan:{
        marginRight:10,
        marginLeft:10,
        marginTop:250,
    }
  });

export default class AsalPengiriman extends Component {
    static navigationOptions = {
        title : 'Asal Pengiriman',
        headerStyle : {
            backgroundColor : '#6D73B5'
        },
        headerTintColor : '#fff',
        headerTitleStyle : {
            fontSize : 18
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.cardbox}>
                    <Text style={{textAlign:'center', color:'#696969'}}>Asal Pengiriman akan digunakan sebagai alamat utama pada fitur cek ongkir. Khusus penggunaan alamat utama untuk pesan pengiriman GoSend kamu harus memilih lokasi langsung dari map</Text>
                </View>
                

                <View>
                    <Text style={styles.text} >Asal Pengiriman</Text>
                    <TextInput style={styles.inputtext} />

                    <Text style={styles.styleicon} onPress={() => Linking.openURL('https://www.google.co.id/maps')}>
                        <Icon name="location" size={25} /> PILIH TITIK ASAL DI MAP
                    </Text>
                    <Text></Text>
                    <Text style={styles.text} >Kode Pos</Text>
                    <TextInput style={styles.inputtext} />

                    <Button onPress={()=> this.props.navigation.navigate('MenuPengaturan')} rounded block style={styles.btnsSimpan}>
                        <Text style={{color:'#FFFFFF'}}>SIMPAN</Text>
                    </Button>
                </View>


            </View>
        );
    };
};