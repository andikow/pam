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
    label : {height: 80, fontSize: 20, marginHorizontal: 15, marginTop:80},
    input : {height: 40, marginBottom:10, borderColor: 'blue', borderBottomWidth: 1, fontSize: 15, paddingLeft:15, marginHorizontal: 10, borderRadius:10},
    container : {justifyContent: 'center', alignItems : 'center', margin:40 } 
})



export default class Verifikasi extends Component {
    constructor(props) {
      super(props);
      this.state ={verifikasi: ''};
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
            
            <Text style={styles.label}>Kami telah mengirimkan kode verifikasi ke e-mail Anda. Silakan masukkan kode tersebut</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan kode verifikasi"
              onChangeText={(value)=> this.setState({verifikasi:value})}
              secureTextEntry
              maxLength={10}
            />

            <View style={{paddingTop:50,paddingHorizontal:20}}>  
            <Button
                title="Buat Password" 
                color='#6d73b5'
                onPress={() => this.props.navigation.navigate('Password')}
            /> 
            </View>

        </ScrollView>
      );
    }
  }