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
    TouchableOpacity
    } from 'react-native';


    const alertPassBaru = () =>
    Alert.alert(
      "Permintaan Password Baru Berhasil",
      "Password Baru Anda telah kami kirim ke e-mail Anda. Silakan kembali ke halaman Login dan gunakan Password baru tersebut",
    [{text:"OK", onPress: () => console.log('alert closed')}])


export default class PasswordBaru extends Component {
    static navigationOptions = {
        title : 'Buat Password Baru',
        headerStyle : {
            backgroundColor : '#6d73b5'
        },
        headerTintColor : '#fff', headerTitleStyle : { fontSize : 20 }
    }

    render(){
      return (
        <View>
            <ScrollView>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:50, marginBottom:10}}>
                <Image
                     style={{width:200,height:200}}
                     source={require('../assets/images/logo.png')}
                />
            </View>

            <View style={{justifyContent:'center', alignItems:'center', paddingTop:30, paddingHorizontal:20}}>
                <Text style={{fontSize:16}}>
                    Klik Button di bawah ini untuk menerima link pembuatan password baru di email kamu.
                </Text>
            </View>

            <View style={{paddingTop:30,paddingHorizontal:50, paddingBottom:10}}>
            <Button
             title="Kirim Link"
              color='#6d73b5'
              onPress={alertPassBaru}
            />
            </View>
            </ScrollView>
        </View>
      );
    }
  }
