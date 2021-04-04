import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:20
    },
    cardbox:{
        borderColor:'#17a2b8',
        marginTop:20,
        marginBottom:20,
        marginLeft:10,
        marginRight:10,
        padding:10,
        backgroundColor:'#FFF8DC'
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
    }
  });

export default class AsalPengiriman extends Component {

   
    render(){
        return (
            <View style={styles.container}>
            

                <View>
                    <Text style={styles.text} >Berat (Kg) *</Text>
                    <TextInput  placeholder="1.0" style={styles.inputtext} />

                    <Text style={styles.text} >Asal Pengiriman) *</Text>
                    <TextInput  style={styles.inputtext} />

                    <Text style={styles.text} >Tujuan Pengiriman *</Text>
                    <TextInput style={styles.inputtext} />
                
                </View>


            </View>
        );
    };
};