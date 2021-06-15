import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material.js';
import { Container, Header, StyleProvider, Button, ListItem, List, Left, Body } from 'native-base';


const styles = StyleSheet.create({
    container: {
      flex: 1
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

        height:30,
        margin:10
    },

    stylefoto:{
        width:70,
        height:70
    },
    styleGrid:{
        marginLeft:20,
        marginRight:20
    },
    styleline:
    {
        borderBottomColor: '#C0C0C0',
        borderBottomWidth: 1,
        padding: 8
    }
  });

export default class MenuPengaturan extends Component {
    static navigationOptions = ({navigation})=>{
        return {
        title : 'Pengaturan',
        headerStyle : {
            backgroundColor : '#6D73B5'
        },
        headerTintColor : '#fff',
        headerTitleStyle : {
            fontSize : 18
        },
    }
}
    render(){
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                <ScrollView>
                <View style={styles.container}>


                <View style={styles.title}>
                    <Text style={styles.title}>Akun</Text>
                </View>
                <List>
                        <ListItem
                            onPress={()=> this.props.navigation.navigate('Profilpengguna')}>
                        <Text>Profil Pengguna</Text>
                        </ListItem>

                        <ListItem
                            onPress={()=> this.props.navigation.navigate('ProfilToko')}>
                        <Text>Profil Toko</Text>
                        </ListItem>

                        <ListItem
                            onPress={()=> this.props.navigation.navigate('Daftaradmin')}>
                        <Text>Daftar Admin</Text>
                        </ListItem>
                </List>

                <View style={styles.title}>
                    <Text style={styles.title}>Metode Pembayaran</Text>
                </View>
                <List>
                        <ListItem
                            onPress={()=> this.props.navigation.navigate('TfBank')}>
                        <Text>Transfer Bank Manual</Text>
                        </ListItem>

                        <ListItem
                            onPress={()=> this.props.navigation.navigate('Cash')}>
                        <Text>Cash</Text>
                        </ListItem>
                </List>

                <View style={styles.title}>
                    <Text style={styles.title}>Pengiriman</Text>
                </View>
                <List>
                        <ListItem
                            onPress={()=> this.props.navigation.navigate('Ekspedisi')}>
                        <Text>Daftar Ekspedisi</Text>
                        </ListItem>

                        <ListItem
                            onPress={()=> this.props.navigation.navigate('AsalPengiriman')}>
                        <Text>Asal Pengiriman</Text>
                        </ListItem>
                </List>

                <View style={styles.title}>
                    <Text style={styles.title}>Lainnya</Text>
                </View>
                <List>
                        <ListItem
                            onPress={()=> this.props.navigation.navigate('Login')}>
                        <Text style={{color:'#FF0000'}}>Log Out</Text>
                        </ListItem>
                </List>


                </View>
                </ScrollView>
                </Container>
            </StyleProvider >
        )
    }
};
