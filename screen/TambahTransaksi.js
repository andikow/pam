import React, { Component } from 'react';
import { Container, Header, Button, StyleProvider, Form, Item, Input, Label, Picker } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material.js';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';


export default class TambahTransaksi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  render(){
    return (
      <>
      <StyleProvider style={getTheme(material)}>
      <Container>
        <Header />
        <ScrollView>
        <View style={styles.title}>
          <Text style={styles.title}>DETAIL PEMBELIAN</Text>
        </View>
        <Form>
        <Grid>
          <Col style={styles.icon}>
          <Icon name="user" size={26} color="#6D73B5" />
          </Col>
          <Col>
          <Item floatingLabel>
            <Label style={styles.judul}>Nama Pelanggan</Label>
            <Input style={styles.data} />
          </Item>
          </Col>
        </Grid>

        <Grid>
          <Col style={styles.icon}>
          <Icon name="message1" size={26} color="#6D73B5" />
          </Col>
          <Col>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="caretdown" />}
                style={{ width: undefined }}
                placeholder="Channel"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Belum ada" value="key0" />
                <Picker.Item label="Whatsapp" value="key1" />
                <Picker.Item label="Line" value="key2" />
                <Picker.Item label="Instagram" value="key3" />
                <Picker.Item label="Bukalapak" value="key4" />
                <Picker.Item label="Shopee" value="key5" />
                <Picker.Item label="Tokopedia" value="key6" />
              </Picker>
          </Item>
          </Col>
          <Col>
          <Item floatingLabel>
            <Label style={styles.judul}>No.Telp/ID</Label>
            <Input style={styles.data} />
          </Item>
          </Col>
        </Grid>

        <Grid>
          <Col style={styles.icon}>
          <Icon name="enviromento" size={26} color="#6D73B5" />
          </Col>
          <Col>
          <Item floatingLabel>
            <Label style={styles.judul}>Alamat Penerima</Label>
            <Input style={styles.data} />
          </Item>
          </Col>
        </Grid>

        <Grid>
          <Col style={styles.icon}>
          <Icon name="wallet" size={26} color="#6D73B5" />
          </Col>
          <Col>
          <Item floatingLabel>
            <Label style={styles.judul}>Total Harga Barang*</Label>
            <Input style={styles.data} />
          </Item>
          </Col>
        </Grid>

        <Grid>
          <Col style={styles.icon}>
          <Icon2 name="bank-outline" size={26} color="#6D73B5" />
          </Col>
          <Col  style={styles.metode}>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="caretdown" />}
              style={{ width: undefined }}
              placeholder="Metode"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Cash" value="key0" />
              <Picker.Item label="BCA" value="key1" />
              <Picker.Item label="Mandiri" value="key2" />
              <Picker.Item label="BNI" value="key3" />
              <Picker.Item label="BRI" value="key4" />
              <Picker.Item label="Permata" value="key5" />
            </Picker>
        </Item>
          </Col>
        </Grid>

        <Grid>
          <Col style={styles.icon}>
          <Icon2 name="truck-outline" size={26} color="#6D73B5" />
          </Col>
          <Col>
          <Item floatingLabel>
            <Label style={styles.judul}>Ongkir</Label>
            <Input style={styles.data} />
          </Item>
          </Col>
        </Grid>

        <Grid>
          <Col style={styles.icon}>
          <Icon name="filetext1" size={26} color="#6D73B5" />
          </Col>
          <Col>
          <Item floatingLabel>
            <Label style={styles.judul}>Catatan</Label>
            <Input style={styles.data} />
          </Item>
          </Col>
        </Grid>
        </Form>

        <Grid>
          <Col style={styles.icon}>
          <Icon2 name="truck-fast-outline" size={26} color="#6D73B5" />
          </Col>
          <Col>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="caretdown" />}
              style={{ width: undefined }}
              placeholder="Ekspedisi"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Go Send" value="key0" />
              <Picker.Item label="JNE" value="key1" />
              <Picker.Item label="JNT" value="key2" />
              <Picker.Item label="JX" value="key3" />
              <Picker.Item label="SiCepat" value="key4" />
              <Picker.Item label="Wahana" value="key5" />
            </Picker>
        </Item>
          </Col>
          <Col>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="caretdown" />}
              style={{ width: undefined }}
              placeholder="Layanan"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="Instan" value="key0" />
              <Picker.Item label="Same Day" value="key1" />
              <Picker.Item label="REG" value="key2" />
              <Picker.Item label="YES" value="key3" />
              <Picker.Item label="OKE" value="key4" />
            </Picker>
        </Item>
          </Col>
        </Grid>

        <View style={styles.title}>
          <Grid>
            <Col>
              <Text style={styles.title}>RINCIAN PRODUK</Text>
            </Col>
            <Col>
              <Text style={styles.btntambah}>+ TAMBAH PRODUK</Text>
            </Col>
          </Grid>
        </View>
        <Grid>
        <Row style={styles.riwayat}>
          <Col>
          <Item floatingLabel>
            <Label style={styles.judul}>Nama Produk</Label>
            <Input style={styles.data} />
          </Item>
          </Col>
          <Col style={styles.harga}>
          <Item floatingLabel>
            <Label style={styles.judul}>Harga @</Label>
            <Input style={styles.data} />
          </Item>
          </Col>
          <Col style={styles.qty}>
          <Item floatingLabel>
            <Label style={styles.judul}>Qty</Label>
            <Input style={styles.data} />
          </Item>
          </Col>
          </Row>
          <Row style={styles.riwayat}>
            <Col>
            <Item floatingLabel>
              <Label style={styles.judul}>Nama Produk</Label>
              <Input style={styles.data} />
            </Item>
            </Col>
            <Col style={styles.harga}>
            <Item floatingLabel>
              <Label style={styles.judul}>Harga @</Label>
              <Input style={styles.data} />
            </Item>
            </Col>
            <Col style={styles.qty}>
            <Item floatingLabel>
              <Label style={styles.judul}>Qty</Label>
              <Input style={styles.data} />
            </Item>
            </Col>
            </Row>
        </Grid>

        <Button rounded block style={styles.btnblock}>
          <Text style={styles.btnpesantext}>SIMPAN</Text>
        </Button>

        </ScrollView>
      </Container>
      </StyleProvider >

      </>
    );
  }
};


const styles = StyleSheet.create({
  title: {
    fontSize: 11,
    color: '#A0A0A0',
    backgroundColor: '#F8F8F9',
    padding: 5,
  },
  icon: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qty: {
    height: 70,
    width: 70,
    padding: 5,
  },
  judul: {
    fontSize: 12,
    color: '#A0A0A0',
    padding: 5,
  },
  data: {
    fontSize: 13,
    padding: 5,
  },
  btntambah:{
    textAlign: 'right',
    padding: 5,
    color: '#6D73B5',
    fontSize: 11,
  },
  wrap:{
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  riwayat: {
    fontSize: 12,
    color: '#A0A0A0',
    padding: 5,
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'#A0A0A0',
    margin:10,
   },
   btnblock1: {
     padding: 10,
     margin: 5,
     borderColor: '#A0A0A0',
     borderWidth: 1,
     color: '#fff',
   },
   buttonText: {
     textAlign: 'center',
     color: '#6D73B5',
     fontSize: 11,
     fontWeight: 'bold',
   },
   btnblock: {
     padding: 10,
     margin: 10,
   },
   btnpesantext: {
     textAlign: 'center',
     color: '#fff',
     fontSize: 12,
     fontWeight: 'bold',
   },
   metode: {
     width: 200,
   },
   harga: {
     width: 150,
   },
   qty: {
     width: 80,
   },
});
