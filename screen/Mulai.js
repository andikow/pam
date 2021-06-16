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

export default class Mulai extends Component {
    static navigationOptions = ({navigation}) =>{
      return {
        headerShown:false
      }
    }


    render(){
      return (
        <View>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:150}}>
                <Image
                     style={{width:300,height:300}}
                     source={require('../assets/images/logo.png')}
                />  
            </View>
            
            <View style={{paddingTop:200,paddingHorizontal:50}}>  
            <Button
             title="Masuk dengan E-mail" 
              color='#6d73b5'
              onPress={()=> this.props.navigation.navigate('CekAkun')}
            /> 
            </View>
        </View>
      );
    }
  }