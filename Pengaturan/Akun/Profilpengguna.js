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

    

export default class Profilpengguna extends Component {
    static navigationOptions = ({navigation})=>{
        return {
            title : 'Profile',
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
                    <Text style={styles.text} >Username</Text>
                    <TextInput style={styles.inputtext} placeholder="Enter Your Userame"  underlineColorAndroid='transparent'  
                    editable={false}  />
                    <Text></Text>
                    <Text style={styles.text} >Nomor Telepon</Text>
                    <TextInput style={styles.inputtext} placeholder="08XXXXXXXXXX"  underlineColorAndroid='transparent'  
                    editable={false}/>
                    <Text></Text>
                    <Text style={styles.text} >Email</Text>
                    <TextInput style={styles.inputtext} placeholder="xxx@gmai.com"  underlineColorAndroid='transparent'  
                    editable={false}/>
                    <Text></Text>
                    <Text style={styles.text} >Password</Text>
                    <TextInput style={styles.inputtext} placeholder="*****"  underlineColorAndroid='transparent'  
                    editable={false}/>               
                </View>
            </View>
            </ScrollView>
        );
    };
};