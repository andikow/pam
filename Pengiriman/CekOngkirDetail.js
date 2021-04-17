import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material.js';
import { Container, Header, StyleProvider, Button, CheckBox } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
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
        marginTop:20,
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
  
export default class CekOngkirDetail extends Component {
    static navigationOptions = ({navigation})=>{
        return {
        title : 'Cek Ongkir',
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
                    <Text style={styles.text} >Berat (Kg) *</Text>
                    <TextInput  placeholder="1.0" style={styles.inputtext} />

                    <TextInput placeholder="JL. M.H. THAMRIN NO. 23 UTARA" style={styles.inputtext} />
                    
                    <TextInput placeholder="JL. MERBAU NO. 123" style={styles.inputtext} />

                    <View style={styles.title}>
                     <Text style={styles.title}>Hasil Cek Ongkir</Text>
                    </View>

                    <View style={styles.styleGrid}>
                         <Image style={styles.stylefoto} source={require('./LogoEkspedisi/GoSend.png')}/>
                         <Text style={{fontSize:12}}>Rp. 12.000 - Instant - 2 Jam</Text>
                         <View style={styles.styleline}/>
                         

                         <Image style={{width:30, height:30, marginTop:10, marginBottom:20}} source={require('./LogoEkspedisi/JX.png')}/>
                         <Text style={{fontSize:12}}>Rp. 7.000 - COD - 2 Hari</Text>
                         <Text />
                         <Text style={{fontSize:12}}>Rp. 7.000 - REG - 2 Hari</Text>
                         <View style={styles.styleline}/>

                         <Image style={{width:50, height:50, marginTop:0, marginBottom:10}} source={require('./LogoEkspedisi/SiCepat.png')}/>

                         <Text style={{fontSize:12}}>Rp. 7.000 - CTC - 2 Hari</Text>
                         <Text style={{fontSize:12}}>Rp. 10.000 - CTCYES - 1 Hari</Text>
                         <View style={styles.styleline}/>

                         <Image style={{width:50, height:50, marginTop:0, marginBottom:10}} source={require('./LogoEkspedisi/JNE.png')}/>

                         <Text style={{fontSize:12}}>Rp. 7.000 - CTC - 2 Hari</Text>
                         <Text style={{fontSize:12}}>Rp. 10.000 - CTCYES - 1 Hari</Text>
                         <View style={styles.styleline}/>

                         <Image style={{width:50, height:50, marginTop:0, marginBottom:10}} source={require('./LogoEkspedisi/JNT.png')}/>
                         <Text style={{fontSize:12}}>Rp. 15.000 - EZ - 2 Hari</Text>
                         <View style={styles.styleline}/>

                         <Image style={{width:50, height:50, marginTop:0, marginBottom:10}} source={require('./LogoEkspedisi/wahana.jpg')}/>
                         <Text style={{fontSize:12}}>Belum tersedia untuk asal dan tujuan tersebut</Text>
                         <View style={styles.styleline}/>
                    </View>

                
                    <Button onPress={()=> this.props.navigation.navigate('CekOngkir')} rounded block style={styles.btncekOngkir}>
                        <Text style={{color:'#FFFFFF'}}>HAPUS</Text>
                    </Button>

                    



                </View>
                </ScrollView>
                </Container>
            </StyleProvider >
        );
    };
};