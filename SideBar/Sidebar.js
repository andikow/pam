import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Left, Container, Header, Title, Content, Footer, FooterTab, Button, Right, Body, Text, List, ListItem } from 'native-base';
import {View} from 'react-native';
import { color } from 'react-native-reanimated';
export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <Header style={{height:150, backgroundColor: '#6D73B5'}} > 
          <Body style={{alignItems:'center'}}>

            <Title>
            <Icon name="store" size={40} />
            </Title>

            <Text />
            <View style={{alignItems:'center'}}>
            <Text style={{color:'#ffffff'}}></Text>
          
            </View>
           
            
           
          </Body>

        </Header>

        
        <Content padder>
        
                        <ListItem 
                            onPress={()=> this.props.navigation.navigate('')}>
                        <Text>Profil Pengguna</Text>
                        </ListItem>

                        <ListItem 
                            onPress={()=> this.props.navigation.navigate('')}>
                        <Text>Profil Toko</Text>
                        </ListItem>

                        <ListItem 
                            onPress={()=> this.props.navigation.navigate('')}>
                        <Text>Daftar Admin</Text>
                        </ListItem>
                        
                
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}