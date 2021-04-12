import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


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

export default class TfBank extends Component {
    static navigationOptions = ({navigation})=>{
        return {
        title : 'Transfer Bank Manual',
        headerStyle : {
            backgroundColor : '#6d73b5'
        },
        headerTintColor : '#fff',
        headerTitleStyle : {
            fontSize : 20
        }
        }
    }
    render(){
        return (
            <ScrollView>
               
            <View style={styles.container}>            
            <FontAwesome
                style={styles.icon}
                    name= "bank"
                    size={70}
                    color ="gray"                                 
                />
                <Text style={styles.text} >Belum Ada Akun Bank</Text>
                <Text style={styles.text1} onPress={()=> this.props.navigation.push('TambahAkunBank')}>+ TAMBAH AKUN BANK</Text>
            </View>
            </ScrollView>
        );
    };
};