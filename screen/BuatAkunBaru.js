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
    Pressable
    } from 'react-native'; 




const styles =StyleSheet.create({
    label : {height: 40, fontSize: 20, marginHorizontal: 15, marginTop:20},
    input : {height: 40, borderBottomWidth:1, borderColor: 'blue', fontSize: 15, paddingLeft:15, marginHorizontal: 10, borderRadius:10},
    container : {justifyContent: 'center', alignItems : 'center', margin:40 } 
})



export default class BuatAkunBaru extends Component {
    constructor(props) {
      super(props);
      this.state ={email :'',password: ''};
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
            />
            </View>

            <View style={{paddingTop:50,paddingHorizontal:20}}>  
            <Button
             title="verifikasi e-mail" 
              color='#6d73b5'
              onPress={()=> this.props.navigation.navigate('Verifikasi')}
            /> 
            </View>

        </ScrollView>
      );
    }
  }