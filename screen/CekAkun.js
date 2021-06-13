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
        label : {height: 40, fontSize: 15, marginHorizontal: 15, marginTop:20},
        input : {height: 40, marginBottom:10, borderColor: 'blue', borderBottomWidth: 1, fontSize: 15, paddingLeft:15, marginHorizontal: 10, borderRadius:10},
        container : {justifyContent: 'center', alignItems : 'center', margin:40 } ,
    })

export default class CekAkun extends Component {
    static navigationOptions = { 
        title : 'Daftar atau Login', 
        headerStyle : { 
            backgroundColor : '#6d73b5' 
        }, 
        headerTintColor : '#fff', headerTitleStyle : { fontSize : 20 } 
    }

    constructor(props) {
        super(props);
        this.state ={email :''};
      }

    render(){
      return (
        <View>
            <ScrollView>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:100}}>
                <Image
                     style={{width:200,height:200}}
                     source={require('../assets/images/logo.png')}
                />  
            </View>
            <Text></Text>

            {/* <View style={{justifyContent:'center', alignItems:'center', paddingTop:30, paddingHorizontal:20}}>
                <Text style={{fontSize:16}}>
                    Masukkan e-mail kamu untuk login atau daftar akun
                </Text>
            </View> */}

            {/* <View style={{paddingTop:20}}> */}
            {/* <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan E-mail Anda"
              onChangeText={(value)=> this.setState({email:value})}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
            />
            </View> */}
            
            <View style={{paddingTop:30,paddingHorizontal:50, paddingBottom:30}}>  
            <Button
             title="Login" 
              color='#6d73b5'
              onPress={()=> this.props.navigation.navigate('Login')}
            /> 
            <Text></Text>
            <Button
             title="Daftar" 
              color='#6d73b5'
              onPress={()=> this.props.navigation.navigate('DaftarAkun')}
            /> 
            </View>
            </ScrollView>
        </View>
      );
    }
  }