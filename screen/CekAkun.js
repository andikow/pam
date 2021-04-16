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
            <View style={{alignItems:'center',justifyContent:'center',marginTop:50}}>
                <Image
                     style={{width:300,height:300}}
                     source={require('../assets/images/logo.png')}
                />  
            </View>

            <View style={{justifyContent:'center', alignItems:'center', paddingTop:30, paddingHorizontal:20}}>
                <Text style={{fontSize:16}}>
                    Masukkan e-mail kamu untuk login atau daftar akun
                </Text>
            </View>

            <View style={{paddingTop:50}}>
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
            
            <View style={{paddingTop:30,paddingHorizontal:50, paddingBottom:30}}>  
            <Button
             title="Daftar atau Login" 
              color='#6d73b5'
              onPress={()=> this.props.navigation.navigate('DaftarAkun')}
            /> 
            </View>
            </ScrollView>
        </View>
      );
    }
  }