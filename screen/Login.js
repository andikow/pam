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
        label : {height: 20, fontSize: 15, marginHorizontal: 15, marginTop:10},
        input : {height: 40, marginBottom:10, borderColor: 'blue', borderBottomWidth: 1, fontSize: 15, paddingLeft:15, marginHorizontal: 10, borderRadius:10},
        container : {justifyContent: 'center', alignItems : 'center', margin:40 } ,
    })

export default class Login extends Component {
    static navigationOptions = {
        title : 'Login',
        headerStyle : {
            backgroundColor : '#6d73b5'
        },
        headerTintColor : '#fff', headerTitleStyle : { fontSize : 20 }
    }

    constructor(props) {
        super(props);
        this.state ={
            email:'',
            password:'',
        };
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
                    Selamat Datang Kembali!
                </Text>
            </View>

            <View>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              onChangeText={(value)=> this.setState({email:value})}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              placeholder="Masukkan Email anda"
            />
            </View>

            <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Password Anda"
              onChangeText={(value)=> this.setState({password:value})}
              secureTextEntry
              maxLength={10}
            />
            </View>

            <View style={{paddingTop:30,paddingHorizontal:50, paddingBottom:10}}>
            <Button
             title="Login"
              color='#6d73b5'
              onPress={()=> this.props.navigation.navigate('RootApp')}
            />
            </View>

            <View style={{paddingTop:10,paddingHorizontal:50, paddingBottom:30}}>
            <Button
             title="Buat Password Baru"
              color='#6d73b5'
              onPress={()=> this.props.navigation.navigate('PasswordBaru')}
            />
            </View>
            </ScrollView>
        </View>
      );
    }
  }
