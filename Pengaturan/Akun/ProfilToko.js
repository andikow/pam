import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
    },
    inputtext:{
        borderBottomColor: '#8a8a8a',
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
  });

    

export default class ProfilToko extends Component {
    static navigationOptions = ({navigation})=>{
        return {
            title : 'Profil Toko',
            headerStyle : {
                backgroundColor : '#6d73b5'
            },
            headerTintColor : '#fff',
            headerTitleStyle : {
                fontSize : 18
            },
            headerRight:()=>(
                <TouchableOpacity
                  onPress={() => navigation.push('Nama')}
                 style={{marginRight: 15}}>
                <Ionicons name="md-pencil" size={30} color='#fff'/>
                </TouchableOpacity>
            )

        }
            
}
    render(){
        return (
            <ScrollView>
            <View style={styles.container}>
            
                <View>
                    <Text style={styles.text} >Nama Toko</Text>
                    <TextInput style={styles.inputtext} placeholder="Estock Shop"  underlineColorAndroid='transparent'  
                    editable={false}  />
                    <Text></Text>
                    <Text style={styles.text} >Nomor Telepon</Text>
                    <TextInput style={styles.inputtext} placeholder="08XXXXXXXXXX"  underlineColorAndroid='transparent'  
                    editable={false}/>
                    <Text></Text>
                    
                    <TextInput style={styles.inputtext} placeholder="URL Toko (Website/FB/IG/Tokopedia/etc"  underlineColorAndroid='transparent'  
                    editable={false}/>               
                </View>
            </View>
            </ScrollView>
        );
    };
};