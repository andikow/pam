import React, {Component} from 'react';
import { useState } from 'react';
import {View, Text, Button, StyleSheet, Alert,TouchableOpacity, ScrollView, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
    },
    inputtext:{
        borderBottomColor: '#1E90FF',
        borderBottomWidth: 1,
        marginLeft:20,
        marginRight:20
        
    },
    textInputFocus:{
        borderBottomColor: '#ff3609',
        borderBottomWidth: 1,
        marginLeft:20,
        marginRight:20
        
    },
    inputtext1:{
        borderBottomColor: '#8a8a8a',
        borderBottomWidth: 1,
        marginLeft:20,
        marginRight:20
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
    }
  });

export default class Nama extends Component {
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
            title : 'Profile',
            headerStyle : {
                backgroundColor : '#6d73b5'
            },
            headerTintColor : '#fff',
            headerTitleStyle : {
                fontSize : 20
            },
            headerRight:(
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                 style={{marginRight: 15}}>
                <Ionicons name="md-checkmark" size={30} color='#fff'/>
                </TouchableOpacity>
            ),
            headerLeft:(
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
            
                <View>
                    <Text style={styles.text} >Username</Text>
                    <TextInput style={this.state.hasFocus ? styles.textInputFocus : styles.inputtext} placeholder="Enter Your Userame"  underlineColorAndroid='transparent'  
                    editable={true}  onFocus={this.setFocus.bind(this, true)} onBlur={this.setFocus.bind(this, false)} />
                    <Text></Text>
                    <Text style={styles.text} >Nomor Telepon</Text>
                    <TextInput  style={this.state.focus ? styles.textInputFocus : styles.inputtext} placeholder="08XXXXXXXXXX"  underlineColorAndroid='transparent'  
                    editable={true} onFocus={this.setFocuss.bind(this, true)} onBlur={this.setFocuss.bind(this, false)}/>
                    <Text></Text>
                    <Text style={styles.text} >Email</Text>
                    <TextInput style={this.state.fokus ? styles.textInputFocus : styles.inputtext} placeholder="xxx@gmai.com"  underlineColorAndroid='transparent'  
                    editable={true} onFocus={this.setFocusss.bind(this, true)} onBlur={this.setFocusss.bind(this, false)}/>
                    <Text></Text>
                    <Text style={styles.text} >Password</Text>
                    <TextInput style={styles.inputtext1} placeholder="*****"  underlineColorAndroid='transparent'  
                    editable={false}/>
                    <Text style={styles.text1}  onPress={()=> this.props.navigation.push("Pass")}>UBAH PASSWORD</Text>
                </View>
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