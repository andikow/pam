import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material.js';
import { Container, Header, StyleProvider, Button, ListItem, List } from 'native-base';
import Icon2 from 'react-native-vector-icons/Entypo';

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
  
export default class MenuPengiriman extends Component {
    static navigationOptions = ({navigation})=>{
        return {
        title : 'Pengiriman',
        headerStyle : {
            backgroundColor : '#6D73B5'
        },
        headerTintColor : '#fff',
        headerTitleStyle : {
            fontSize : 18
        },
        headerRight : (
            <TouchableOpacity  onPress={()=> navigation.push('MenuBar')}>
                         <Icon2 name='menu' size={30} style={{marginRight:10}} />
                    </TouchableOpacity>
         )
    }
}
    
   
    render(){
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                <ScrollView>
                <View style={styles.container}>
                <List>
                        <ListItem 
                            onPress={()=> this.props.navigation.navigate('CekOngkir')}>
                        <Text>Cek Ongkir</Text>
                        </ListItem>
                </List>

                </View>
                </ScrollView>
                </Container>
            </StyleProvider >
        );
    };
};