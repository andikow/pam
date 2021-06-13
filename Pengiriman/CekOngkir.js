import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material.js';
import { Container, Header, StyleProvider, Button } from 'native-base';
import Icon2 from 'react-native-vector-icons/Entypo';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:20
    },
    inputtext:{
        borderBottomColor: '#1E90FF',
        borderBottomWidth: 1,
        marginLeft:20,
        marginRight:20,
        marginBottom:20
    },
    text:{
        marginLeft:20,
        marginRight:20,
        color:'#696969'
    },
    styleicon:{
        marginLeft:30,
        marginRight:20,
        marginBottom:10,
        color:'#224F69'

    },
    title: {
        fontSize: 11,
        color: '#A0A0A0',
        backgroundColor: '#F8F8F9',
        padding: 5,
      },
    btncekOngkir:{
        marginRight:10,
        marginLeft:10,
        marginTop:250,
    },
    
  });

export default class CekOngkir extends Component {

    static navigationOptions = ({navigation})=>{
        return {
        title : 'Cek Ongkir',
        headerStyle : {
            backgroundColor : '#6D73B5'
        },
        headerTintColor : '#fff',
        headerTitleStyle : {
            fontSize : 18
        }
    }
}
    render(){
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                <View style={styles.container}>
                    <Text style={styles.text} >Berat (Kg) *</Text>
                    <TextInput  placeholder="1.0" style={styles.inputtext} />

                    <TextInput placeholder="Asal Pengiriman" style={styles.inputtext} />
                    <Text style={styles.styleicon} onPress={() => Linking.openURL('https://www.google.co.id/maps')}>
                        <Icon name="location" size={25} /> PILIH TITIK ASAL DI MAP
                    </Text>

                    <TextInput placeholder="Tujuan Pengiriman" style={styles.inputtext} />
                    <Text style={styles.styleicon} onPress={() => Linking.openURL('https://www.google.co.id/maps')} >
                        <Icon name="location" size={25} /> PILIH TITIK TUJUAN DI MAP
                    </Text>
                   

                    <Button onPress={()=> this.props.navigation.navigate('CekOngkirDetail')} rounded block style={styles.btncekOngkir}>
                        <Text style={{color:'#FFFFFF'}}>CEK ONGKOS KIRIM</Text>
                    </Button>




                </View>
                </Container>
            </StyleProvider >
        );
    };
};