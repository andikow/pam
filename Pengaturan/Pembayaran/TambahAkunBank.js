import React, {Component} from 'react';
import { useState } from 'react';
import {View, Text, Button, StyleSheet,TouchableOpacity,Alert, ScrollView, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import RadioForm, {
    RadioButton, 
    RadioButtonInput, 
    RadioButtonLabel
  } from 'react-native-simple-radio-button';
  import {Col, row, Grid, Row} from "react-native-easy-grid";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
    },
    inputtext:{
        borderBottomColor: '#1E90FF',
        borderBottomWidth: 1,
        marginLeft:20,
        marginRight:20,
        marginBottom:15,
        
    },
    textInputFocus:{
        borderBottomColor: '#ff3609',
        borderBottomWidth: 1,
        marginLeft:20,
        marginRight:20,
        marginBottom:15,
        
    },
    textInputFocus1:{
        borderBottomColor: '#ff3609',
        borderBottomWidth: 1,
        marginLeft:70,
        marginRight:20,
        marginTop: -80,
        marginBottom:30,
        width: 200
    },
    inputtext1:{
        borderBottomColor: '#1E90FF',
        borderBottomWidth: 1,
        marginLeft:70,
        marginRight:20,
        marginTop: -80,
        marginBottom:30,
        width: 200

    },
    text:{
        marginLeft:20,
        marginRight:20,
        color:'#696969',
        marginTop: 10,
    },
    text1:{
        marginLeft:20,
        marginRight:20,
        color:'#0936ff',
        marginTop: 10,
    },
    button:{
        marginTop:80,
        width: 90,
        marginLeft:130
    },
    radiobutton:{
        marginLeft:20,
        marginBottom:15,
    }
  });
  var bank = [
    {label: "BCA", value: 0},
    {label: "MANDIRI", value: 1},
    {label: "BNI", value: 2},
    {label: "BRI", value: 3},
    {value:4}
  ];

export default class TambahAkunBank extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasFocus: false
        },
        this.navi = {
            focus: false
        },
        this.nav = {
            fokus: false
        }
    }

    static navigationOptions = ({navigation})=>{
        return {
            title : 'Tambah Akun Bank',
            headerStyle : {
                backgroundColor : '#6d73b5'
            },
            headerTintColor : '#fff',
            headerTitleStyle : {
                fontSize : 18
            },
            headerRight:()=>(
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                 style={{marginRight: 15}}>
                <Ionicons name="md-checkmark" size={30} color='#fff'/>
                </TouchableOpacity>
            ),
            headerLeft:()=>(
                <TouchableOpacity
                  onPress={() => Alert.alert(
                    'Konsfirmasi Keluar',
                    'Kamu memiliki perubahan yang belum disimpan. Apakah kamu yakin ingin membatalkan perubahan?',
                    [
                      {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
                      {text: 'YES', onPress: () => navigation.goBack()},
                    ]
                  )}
                 style={{marginLeft: 15}}>
                <Ionicons name="md-close-outline" size={30} color='#fff'/>
                </TouchableOpacity>
            ),

        }
    }
    render(){
        return (
        <ScrollView>
            <View style={styles.container}>
            
            <Grid>
                <Row>
                <RadioForm style={styles.radiobutton}
                radio_props={bank}
                onPress={(value) =>{}}
                initial={-1}
                buttonSize={15}
                buttonOuterSize={25}
                labelStyle={{paddingBottom:20,paddingLeft:30,fontSize:16}}/>
                </Row>
                <Row>
                <TextInput style={this.state.fokus ? styles.textInputFocus1 : styles.inputtext1} placeholder="Bank Lainnya"  underlineColorAndroid='transparent'  
               onFocus={this.setFocusss.bind(this, true)} onBlur={this.setFocusss.bind(this, false)}/>
                </Row>
            </Grid>
            
            <TextInput style={this.state.hasFocus ? styles.textInputFocus : styles.inputtext} placeholder="Nomor Rekening"  underlineColorAndroid='transparent'  
            onFocus={this.setFocus.bind(this, true)} onBlur={this.setFocus.bind(this, false)}/>
            <TextInput style={this.state.focus ? styles.textInputFocus : styles.inputtext} placeholder="Nama Pemilik Rekening"  underlineColorAndroid='transparent'  
            onFocus={this.setFocuss.bind(this, true)} onBlur={this.setFocuss.bind(this, false)}/>
            </View>
            </ScrollView>
        );
    };
    setFocus (hasFocus) {
        this.setState({hasFocus});
    }
    setFocuss (focus) {
        this.setState({focus});
    }
    setFocusss (fokus) {
        this.setState({fokus});
    }
};