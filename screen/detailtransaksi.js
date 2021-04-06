import React, { Component } from 'react';
import { Container, Header, Button, StyleProvider } from 'native-base';
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


export default class DetailTransaksi extends Component {
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

        <Grid>
          <Col style={styles.icon}>
          <Icon name="user" size={26} color="#6D73B5" />
          </Col>
          <Col>
            <Row style={styles.judul}>
              <Text style={styles.judul}>Nama Pelanggan</Text>
            </Row>
            <Row style={styles.data}>
              <Text>Vandarina Risca</Text>
            </Row>
          </Col>
        </Grid>

        <Grid>
          <Col style={styles.icon}>
          <Icon name="message1" size={26} color="#6D73B5" />
          </Col>
          <Col>
            <Row style={styles.judul}>
              <Text style={styles.judul}>Channel & Telp/ID</Text>
            </Row>
            <Row style={styles.data}>
              <Text>085624742052</Text>
            </Row>
          </Col>
        </Grid>

        <Grid>
          <Col style={styles.icon}>
          <Icon name="enviromento" size={26} color="#6D73B5" />
          </Col>
          <Col>
            <Row style={styles.judul}>
              <Text style={styles.judul}>Alamat Penerima</Text>
            </Row>
            <Row style={styles.data}>
              <Text>Jln. Merbau No. 123</Text>
            </Row>
          </Col>
        </Grid>

        <Grid>
          <Col style={styles.icon}>
          <Icon name="wallet" size={26} color="#6D73B5" />
          </Col>
          <Col>
            <Row style={styles.judul}>
              <Text style={styles.judul}>Total Harga Barang*</Text>
            </Row>
            <Row style={styles.data}>
              <Text>Rp 350.000</Text>
            </Row>
          </Col>
        </Grid>

        <Grid>
          <Col style={styles.icon}>
          <Icon2 name="bank-outline" size={26} color="#6D73B5" />
          </Col>
          <Col>
            <Row style={styles.judul}>
              <Text style={styles.judul}>Metode*</Text>
            </Row>
            <Row style={styles.data}>
              <Text>Bank BCA</Text>
            </Row>
          </Col>
        </Grid>

        <Grid>
          <Col style={styles.icon}>
          <Icon2 name="truck-outline" size={26} color="#6D73B5" />
          </Col>
          <Col>
            <Row style={styles.judul}>
              <Text style={styles.judul}>Ongkir</Text>
            </Row>
            <Row style={styles.data}>
              <Text>Rp 10.000</Text>
            </Row>
          </Col>
        </Grid>

        <Grid>
          <Col style={styles.icon}>
          <Icon name="filetext1" size={26} color="#6D73B5" />
          </Col>
          <Col>
            <Row style={styles.judul}>
              <Text style={styles.judul}>Catatan</Text>
            </Row>
            <Row style={styles.data}>
              <Text>Contoh transaksi yang dibuat dengan estock</Text>
            </Row>
          </Col>
        </Grid>

        <View style={styles.title}>
          <Text style={styles.title}>DETAIL PENGIRIMAN</Text>
        </View>
        <Grid>
          <Col style={styles.icon}>
          <Icon2 name="truck-fast-outline" size={26} color="#6D73B5" />
          </Col>
          <Col>
            <Row style={styles.judul}>
              <Text style={styles.judul}>Ekspedisi</Text>
            </Row>
            <Row style={styles.data}>
              <Text>Belum ada</Text>
            </Row>
          </Col>
          <Col>
            <Row style={styles.judul}>
              <Text style={styles.judul}>Layanan</Text>
            </Row>
            <Row style={styles.data}>
              <Text>Belum ada</Text>
            </Row>
          </Col>
        </Grid>

        <View style={styles.title}>
          <Text style={styles.title}>RINCIAN PRODUK</Text>
        </View>
        <Grid>
        <Row style={styles.judul}>
          <Col style={styles.qty}>
            <Text>1x</Text>
          </Col>
          <Col>
            <Text>Atasan Hijau</Text>
          </Col>
          <Col>
            <Text>Rp 250.000</Text>
          </Col>
          </Row>

          <View style = {styles.lineStyle} />

          <Row style={styles.judul}>
            <Col style={styles.qty}>
              <Text>1x</Text>
            </Col>
            <Col>
              <Text>Bawahan Merah</Text>
            </Col>
            <Col>
              <Text>Rp 100.000</Text>
            </Col>
            </Row>
        </Grid>

        <View style={styles.title}>
          <Grid>
            <Col>
              <Text style={styles.title}>RIWAYAT PEMESANAN</Text>
            </Col>
            <Col>
              <Text style={styles.btntambah}>+ TAMBAH</Text>
            </Col>
          </Grid>
        </View>
        <Grid>
        <Row style={styles.riwayat}>
          <Col>
            <Text>17 Mar, 21:13</Text>
          </Col>
          <Col style={{flexDirection:'row'}}>
            <Text style={styles.wrap}>Transaction status changed to paid</Text>
          </Col>
          </Row>
          <Row style={styles.riwayat}>
            <Col>
              <Text>17 Mar, 21:10</Text>
            </Col>
            <Col style={{flexDirection:'row'}}>
              <Text style={styles.wrap}>Transaction status changed to pending payment</Text>
            </Col>
            </Row>
            <Row style={styles.riwayat}>
              <Col>
                <Text>17 Mar, 21:08</Text>
              </Col>
              <Col style={{flexDirection:'row'}}>
                <Text style={styles.wrap}>New transaction created</Text>
              </Col>
              </Row>
        </Grid>

        <View style = {styles.lineStyle} />

        <Grid>
          <Col>
            <Button rounded block light style={styles.btnblock1}>
              <Text style={styles.buttonText}>CETAK LABEL PENGIRIMAN</Text>
            </Button>
          </Col>
          <Col>
          <Button rounded block light style={styles.btnblock1}>
            <Text style={styles.buttonText}>SUDAH DIKIRIM</Text>
          </Button>
          </Col>
        </Grid>

        <Button rounded block style={styles.btnblock}>
          <Text style={styles.btnpesantext}>PESAN PENGIRIMAN</Text>
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
    fontSize: 11,
    color: '#A0A0A0',
    height: 35,
    padding: 5,
  },
  data: {
    fontSize: 13,
    height: 35,
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
    fontSize: 11,
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
});
