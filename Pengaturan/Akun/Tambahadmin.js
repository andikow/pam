import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Col, Row, Grid } from "react-native-easy-grid";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column', 
      alignItems : 'center',
      position: 'relative',

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
        color:'#8a8a8a',
        marginTop: 10,
    },
    textInputFocus:{
        borderBottomColor: '#ff3609',
        borderBottomWidth: 1,
        marginLeft:20,
        marginRight:20
        
    }
  });

export default class Tambahadmin extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasFocus: false
        },
        this.navi = {
            focus: false
        }
    }
    static navigationOptions = ({navigation})=>{
        return {
        title : 'Tambah Admin',
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
            )
        }
    }
    render(){
        return (
            <ScrollView>
                <Text style={styles.text} >Username</Text>
                <TextInput style={this.state.hasFocus ? styles.textInputFocus : styles.inputtext} placeholder="Enter Your Userame"  underlineColorAndroid='transparent'  
                editable={true} onFocus={this.setFocus.bind(this, true)} onBlur={this.setFocus.bind(this, false)} />
                <Text></Text>
                <Text></Text>
                <Text style={styles.text} >Email</Text>
                <TextInput style={this.state.focus ? styles.textInputFocus : styles.inputtext} placeholder="xxx@gmai.com"  underlineColorAndroid='transparent'  
                editable={true} onFocus={this.setFocuss.bind(this, true)} onBlur={this.setFocuss.bind(this, false)}/>
            </ScrollView>
        );
    };
    setFocus (hasFocus) {
        this.setState({hasFocus});
    }
    setFocuss (focus) {
        this.setState({focus});
    }
};