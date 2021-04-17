import React, { Component } from 'react';
import { Container, Text, Header, Content, ListItem, CheckBox, Body, Form} from 'native-base';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';




export default class App extends Component {
  static navigationOptions = ({navigation})=>{
    return {
    title : 'Daftar Ekspedisi',
    headerStyle : {
        backgroundColor : '#6D73B5'
    },
    headerTintColor : '#fff',
    headerTitleStyle : {
        fontSize : 18
    },
    headerRight : (
        <TouchableOpacity  onPress={()=> navigation.push('MenuBar')}>
                     <Icon name='menu' size={30} style={{marginRight:10}} />
                </TouchableOpacity>
     )
}
}

  constructor(props) {
    super(props)
    this.state = { saldo: '', itemOne: false, itemTwo: false, itemThree: false, itemFour: false, itemFive: false, itemSix : false, itemSeven : false }
  }

  render() {
    return (
      <Container>
        <Content padder>
        <View style={{borderColor:'#17a2b8',
        marginTop:20,
        marginBottom:20,
        marginLeft:10,
        marginRight:10,
        padding:10,
        backgroundColor:'#FCE148'}}>
        <Text style={{textAlign:'center', color:'#696969'}}>Ekspedisi yang dipilih akan digunakan di fitur cek ongkir sebagai pilihan pengiriman. Kamu hanya akan melihat pilihan servis berdasarkan ekspedisi yang dipilih</Text>
        </View>
          <Form>
            <ListItem onPress={() => this.setState({ itemOne: !this.state.itemOne })}>
              <CheckBox checked={this.state.itemOne} onPress={() => this.setState({ itemOne: !this.state.itemOne })} />
              <Body>
                <Text>Go Send</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.setState({ itemTwo: !this.state.itemTwo })} >
              <CheckBox checked={this.state.itemTwo} onPress={() => this.setState({ itemTwo: !this.state.itemTwo })} />
              <Body>
                <Text>J&T</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.setState({ itemThree: !this.state.itemThree })}>
              <CheckBox checked={this.state.itemThree} onPress={() => this.setState({ itemThree: !this.state.itemThree })} />
              <Body>
                <Text>JNE</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.setState({ itemFour: !this.state.itemFour })}>
              <CheckBox checked={this.state.itemFour} onPress={() => this.setState({ itemFour: !this.state.itemFour })} />
              <Body>
                <Text>JX</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.setState({ itemFive: !this.state.itemFive })}>
              <CheckBox checked={this.state.itemFive} onPress={() => this.setState({ itemFive: !this.state.itemFive })} />
              <Body>
                <Text>Pos Indonesia</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.setState({ itemSix: !this.state.itemSix })}>
              <CheckBox checked={this.state.itemSix} onPress={() => this.setState({ itemSix: !this.state.itemSix })} />
              <Body>
                <Text>SiCepat</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.setState({ itemSeven: !this.state.itemSeven })}>
              <CheckBox checked={this.state.itemSeven} onPress={() => this.setState({ itemSeven: !this.state.itemSeven })} />
              <Body>
                <Text>Wahana</Text>
              </Body>
            </ListItem>
            
          </Form>
        </Content>
      </Container>
    );
  }
}