import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconTransaksi from 'react-native-vector-icons/FontAwesome';
import IconStatistik from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';
import {Left, Container, Header, Title, Content, Footer, FooterTab, Button, Right, Body, Text, List, ListItem, Form } from 'native-base';
import {View} from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  stylelist:{
      color:'#000000',

  },
  styleicon:{
    color:'#6D73B5',
    marginRight:20
  }
  
});
export default class Sidebar extends Component {
  static navigationOptions = {
    header:null
    
}
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
             <Text style={{color:'#ffffff'}}>E-Stock Shop </Text>
            </View>
          </Body>
        </Header>

        <Content padder>
          <ListItem 
              onPress={()=> this.props.navigation.navigate('')}>
              <IconTransaksi style={styles.styleicon} name="shopping-bag" size={20} /><Text  style={styles.stylelist}>Transaksi</Text>
          </ListItem>
          <ListItem 
              onPress={()=> this.props.navigation.navigate('')}>
              <Text  style={styles.stylelist}>Status</Text>
          </ListItem>
          <ListItem 
              onPress={()=> this.props.navigation.navigate('')}>
              <Text  style={styles.stylelist}>Laporan</Text>
          </ListItem>
          <ListItem 
              onPress={()=> this.props.navigation.navigate('')}>
              <Text  style={styles.stylelist}>Arsip</Text>
          </ListItem>

          <ListItem 
              onPress={()=> this.props.navigation.navigate('')}>
              <IconStatistik style={styles.styleicon} name="piechart" size={20} /><Text  style={styles.stylelist}>Stastitik Toko</Text>
          </ListItem>

          <ListItem 
              onPress={()=> this.props.navigation.navigate('MenuPengiriman')}>
              <IconTransaksi style={styles.styleicon} name="truck" size={20} /><Text  style={styles.stylelist}>Pengiriman</Text>
          </ListItem>

          <ListItem 
              onPress={()=> this.props.navigation.navigate('')}>
              <IconTransaksi style={styles.styleicon} name="list-alt" size={20} /><Text  style={styles.stylelist}>Daftar Produk</Text>
          </ListItem>

          <ListItem 
              onPress={()=> this.props.navigation.navigate('MenuPengaturan')}>
              <IconStatistik style={styles.styleicon} name="setting" size={20} /><Text  style={styles.stylelist}>Pengaturan</Text>
          </ListItem>
          
        </Content>
        
      </Container>
    );
  }
}