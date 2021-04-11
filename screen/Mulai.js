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
    label : {height: 40, fontSize: 20, marginHorizontal: 10, marginTop:20},
    input : {height: 40, borderColor: 'black', borderWidth: 1, fontSize: 15, paddingLeft:15, marginHorizontal: 10, borderRadius:10},
    container : {justifyContent: 'center', alignItems : 'center', margin:40 } 
})



export default class Mulai extends Component {

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
            
            <View style={{paddingTop:200,paddingHorizontal:20}}>  
            <Button
             title="Masuk dengan E-mail" 
              color='#6d73b5'
              onPress={()=> this.props.navigation.navigate('Login')}
            /> 
            </View>

            <View style={{paddingTop:20,paddingHorizontal:20}}>  
            <Button
             title="Buat Akun Baru" 
              color='#6d73b5'
              onPress={()=> this.props.navigation.navigate('BuatAkunBaru')}
            /> 
            </View>

        </ScrollView>
      );
    }
  }