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




const styles =StyleSheet.create({
    label : {height: 40, fontSize: 20, marginHorizontal: 15, marginTop:20},
    input : {height: 40, marginBottom:10, borderColor: 'blue', borderBottomWidth: 1, fontSize: 15, paddingLeft:15, marginHorizontal: 10, borderRadius:10},
    container : {justifyContent: 'center', alignItems : 'center', margin:40 } 
})



export default class Password extends Component {
    constructor(props) {
      super(props);
      this.state ={konfirmasipass :'',password: ''};
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
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Password Anda"
              onChangeText={(value)=> this.setState({password:value})}
              secureTextEntry
              onSubmitEditing={()=> this.inputPassword.focus()}
              returnKeyType="next"
            />
            </View>

            <Text style={styles.label}>Konfirmasi Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Konfirmasi Password Anda"
              onChangeText={(value)=> this.setState({konfirmasipass:value})}
              secureTextEntry
              ref={(input)=> this.inputPassword = input}
              maxLength={10}
            />

            <View style={{paddingTop:50,paddingHorizontal:20}}>  
            <Button
             title="Masuk" 
              color='#6d73b5'
            /> 
            </View>

        </ScrollView>
      );
    }
  }