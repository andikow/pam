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
    Alert
    } from 'react-native'; 




const styles =StyleSheet.create({
    label : {height: 40, fontSize: 20, marginHorizontal: 15, marginTop:20},
    input : {height: 40, marginBottom:10, borderColor: 'blue', borderBottomWidth: 1, fontSize: 15, paddingLeft:15, marginHorizontal: 10, borderRadius:10},
    container : {justifyContent: 'center', alignItems : 'center', margin:40 } 
})


const alertPassBaru = () =>
Alert.alert(
  "Permintaan Password Baru Berhasil", 
  "Password Baru Anda telah kami kirim ke e-mail Anda. Silakan kembali ke halaman Login dan gunakan Password baru tersebut",
[{text:"OK", onPress: () => console.log("alert closed")}])

export default class PasswordBaru extends Component {
    constructor(props) {
      super(props);
      this.state ={email :''};
    }

    static navigationOptions = ({navigation}) =>{
      return {
        headerShown:false
      }
    }

    render(){
      return (
        <ScrollView>
            <View style={{alignItems:'center',marginTop:20, marginBottom:-50}}>
                <Image
                     style={{width:300,height:300}}
                     source={require('../assets/images/logo.png')}
                />  

            </View>
            
            <View style={{paddingTop:70}}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan E-mail Anda"
              onChangeText={(value)=> this.setState({email:value})}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
            />
            </View>

            <View style={{paddingTop:50,paddingHorizontal:20}}>  
            <Button
             title="Permintaan Password baru" 
              color='#6d73b5'
              onPress={alertPassBaru}
            /> 
            </View>

        </ScrollView>
      );
    }
  }