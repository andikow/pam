import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from 'react-native-image-picker'

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
        color:'#000',
        marginTop: 10,
    },
    text1:{
        marginRight:40,
        marginLeft:40,
        textAlign: 'center',
        color:'#000',
        marginTop: 20,
    },
    gambar:{
        alignItems: 'center',
        marginBottom: 20
    },

  });

const options={
    title: 'my photo',
    chooseFromLibraryButtonTitle:'library'
}

export default class EditProfilToko extends Component {
    state = {
        photo: null,
    };
    handleChoosePhoto = () => {
        const options = {
            noData: true,
        }; 
        ImagePicker.launchImageLibrary(options, response => {
            console.log("response", response);
            if (response.uri){
                this.setState ({photo: response});
            }
        });
    }
    static navigationOptions = ({navigation})=>{
        return {
            title : 'Edit Profile Toko',
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
      const {photo} = this.state; 
        return (
            <ScrollView>
                <Text style={styles.text1}>
                    Foto, Nama dan No.Telp Toko di bawah ini
                    ini akan dicantumkan jua pada label
                    pengiriman.
                </Text>
                
            <View style={styles.container}>

                <View>
                <View style={styles.gambar} >
                <Ionicons name="image" size={100} color='#bcbfb9' style={styles.gambar}/>
                <TouchableOpacity>
                    <Text>Ubah Foto</Text>
                </TouchableOpacity>
                
                </View> 
               
                    <Text style={styles.text} >Nama Toko</Text>
                    <TextInput style={styles.inputtext} placeholder="Enter Your Userame"  underlineColorAndroid='transparent'  
                    editable={true}  />
                    <Text></Text>
                    <Text style={styles.text} >Nomor Telepon</Text>
                    <TextInput style={styles.inputtext} placeholder="08XXXXXXXXXX"  underlineColorAndroid='transparent'  
                    editable={true}/>
                    <Text></Text>
                    <TextInput style={styles.inputtext} placeholder="URL toko (Website/IG/FB/Tokopedia/etc"  underlineColorAndroid='transparent'  
                    editable={true}/>             
                </View>
            </View>
            </ScrollView>
        );
    };
};