import React, { Component } from 'react';
import { Container, Header } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


export default class DetailTransaksi extends Component {
  render(){
    return (
      <>
      <Container>
        <Header />
        <ScrollView>
        <View style={styles.title}>
          <Text style={styles.title}>DETAIL PEMBELIAN</Text>
        </View>

        <Grid>
          <Col style={styles.icon}>
          <Text>icon</Text>
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
          <Text>icon</Text>
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
          <Text>icon</Text>
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
          <Text>icon</Text>
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
          <Text>icon</Text>
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
          <Text>icon</Text>
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
          <Text>icon</Text>
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
          <Text>icon</Text>
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

        </Grid>
        

        </ScrollView>
      </Container>

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
});
