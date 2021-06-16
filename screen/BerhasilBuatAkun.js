import React, { Component } from 'react'; 
import { SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    Image,
    Alert,
    } from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class BerhasilBuatAkun extends Component {
    static navigationOptions = { 
        title : 'Akun Berhasil Dibuat', 
        headerStyle : { 
            backgroundColor : '#6d73b5' 
        }, 
        headerTintColor : '#fff', headerTitleStyle : { fontSize : 20 } 
    }

    render(){
      return (
        <View>
            <ScrollView>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                <Image
                     style={{width:300,height:300}}
                     source={require('../assets/images/email.png')}
                />  
            </View>

            <View style={{justifyContent:'center', alignItems:'center', paddingTop:50, paddingHorizontal:10}}>
                <Text style={{fontSize:16}}>
                    Tinggal satu tahap lagi untuk menjadi user di ESTOCK.
                    Periksa Email Kamu untuk verifikasi.
                </Text>
            </View>
            
            <View style={{paddingTop:100,paddingHorizontal:50, paddingBottom:30}}>  
            <Button
             title="Sudah verifikasi, masuk" 
              color='#6d73b5'
              onPress={()=> this.props.navigation.navigate('Login')}
            /> 
            </View>
            
            <View style={{justifyContent:'center', alignItems:'center'}}>  
                <TouchableOpacity>
                    <Text style={{color:'blue'}}>
                        Kirim Ulang Link Verifikasi
                    </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
      );
    }
  }