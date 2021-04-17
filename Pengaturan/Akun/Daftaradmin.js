import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column', 
      alignItems : 'center',
      position: 'relative',

    },
    text:{
        marginLeft:20,
        marginRight:20,
        color:'#696969',
        marginTop: 10,
        fontSize:16,
        justifyContent: 'center',
    },
    text1:{
        marginLeft:20,
        marginRight:20,
        color:'#0936ff',
        marginTop: 250,
        fontSize:14,
        justifyContent: 'center',
    },
    icon:{
        marginTop: 170,
    }
  });

export default class Daftaradmin extends Component {
    static navigationOptions = ({navigation})=>{
        return {
        title : 'Daftar Admin',
        headerStyle : {
            backgroundColor : '#6d73b5'
        },
        headerTintColor : '#fff',
        headerTitleStyle : {
            fontSize : 18
        }
        }
    }
    render(){
        return (
            <ScrollView>
               
            <View style={styles.container}>            
            <Ionicons
                style={styles.icon}
                    name= "md-person-add"
                    size={70}
                    color ="gray"                                 
                />
                <Text style={styles.text} >Belum Ada Admin</Text>
                <Text style={styles.text1} onPress={()=> this.props.navigation.push('Tambahadmin')}>+ TAMBAH ADMIN</Text>
            </View>
            </ScrollView>
        );
    };
};