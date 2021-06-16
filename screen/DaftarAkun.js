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
import {Col, Row, Grid} from 'react-native-easy-grid';

    const styles =StyleSheet.create({
        label : {height: 20, fontSize: 15, marginHorizontal: 15, marginTop:10},
        input : {height: 40, marginBottom:10, borderColor: 'blue', borderBottomWidth: 1, fontSize: 15, paddingLeft:15, marginHorizontal: 10, borderRadius:10},
        container : {justifyContent: 'center', alignItems : 'center', margin:40 } ,
    })

export default class DaftarAkun extends Component {
    static navigationOptions = { 
        title : 'Daftar Akun Baru', 
        headerStyle : { 
            backgroundColor : '#6d73b5' 
        }, 
        headerTintColor : '#fff', headerTitleStyle : { fontSize : 20 } 
    }

    constructor(props) {
        super(props);
        this.state ={
            nama :'',
            namatoko:'',
            email:'',
            telp:'',
            password:'',
            konfirmpassword:'',
        };
    }

    render(){
      return (
            <ScrollView>
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Image
                     style={{width:300,height:300}}
                     source={require('../assets/images/toko.png')}
                />  
            </View>

            <View style={{justifyContent:'center', alignItems:'center', paddingHorizontal:20}}>
                <Text style={{fontSize:16}}>
                    Email kamu belum terdaftar. Silakan lengkapi form untuk membuat akun ESTOCK
                </Text>
            </View>

            <View style={{paddingTop:30}}>
            <Text style={styles.label}>Nama</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Nama Anda"
              onChangeText={(value)=> this.setState({nama:value})}
              autoCapitalize="words"
              keyboardType="default"
              returnKeyType="next"
            />
            </View>

            <View>
            <Text style={styles.label}>Nama Toko</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Nama Toko Anda"
              onChangeText={(value)=> this.setState({namatoko:value})}
              autoCapitalize="words"
              keyboardType="default"
              returnKeyType="next"
            />
            </View>

            <View>
            <Grid>
                <Row>
                    <Text style={styles.label}>
                        No. Telepon
                    </Text>
                </Row>
                <Row>
                <Col size={1}>
                    <Text style={{fontSize: 15,marginLeft:16, marginTop:10}}>
                        +62
                    </Text>
                </Col>
                <Col size={8}>
                    <TextInput
                            style={styles.input}
                            placeholder="Telepon"
                            keyboardType="phone-pad"
                            returnKeyType="next"
                            onChangeText={(value)=> this.setState({telp:value})}
                    />
                </Col>
                </Row>
            </Grid>
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

            <View>
            <Text style={styles.label}>Konfirmasi Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Konfirmasi Password Anda"
              onChangeText={(value)=> this.setState({konfirmpassword:value})}
              secureTextEntry
              maxLength={10}
            />
            </View>

            <View style={{paddingTop:30,paddingHorizontal:50, paddingBottom:30}}>  
            <Button
             title="Buat Akun ESTOCK" 
              color='#6d73b5'
              onPress={()=> this.props.navigation.navigate('BerhasilBuatAkun')}
            /> 
            </View>
            </ScrollView>
      );
    }
  }