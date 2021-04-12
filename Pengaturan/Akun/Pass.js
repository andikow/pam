import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Alert, ScrollView, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'


const styles = StyleSheet.create({
    container: {
      flex: 1,
     marginTop: 20,
     justifyContent:'center',
     alignContent: 'center'
    },
    text:{
        textAlign:'center',
    },

    icon:{
        opacity:0.5,
        marginHorizontal: 130,
        marginBottom:20,
        marginTop: -40

    },
    contain:{
        width: 300,
        alignSelf:'center',
        bottom: -170,
        
        
    },
      visit: {
        margin: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        textAlign: "center",
        backgroundColor: '#6d73b5',
        color: '#fff',
        fontSize: 15,
        borderRadius: 50
      }
  });

export default class Pass extends Component {
    static navigationOptions = {
        title : 'Buat Password Baru',
        headerStyle : {
            backgroundColor : '#fff'
        },
        headerTintColor : '#000',
        headerTitleStyle : {
            fontSize : 20
        }
    }
    render(){
        return (
           
            <View style={styles.container}>
            <Ionicons    
            name="md-pin-outline"
             style={styles.icon}       
            size={100}
            color ="green"
            
            />
              <Text style={styles.text}>Klik button di bawah untuk menerima link</Text>
              <Text style={styles.text}>pembuatan password baru di email kamu.</Text>
              <View style={styles.contain}>
              <TouchableOpacity onPress={() => Alert.alert('Keterangan','Permintaan perubahan password berhasil dikirim ke email kamu')}>
                <Text style={styles.visit}>KIRIM LINK</Text>
              </TouchableOpacity>
              </View>
            </View>
            
        );
    };
};