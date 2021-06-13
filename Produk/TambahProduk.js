import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Alert} from 'react-native';
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material.js';
import { Container, Header, StyleProvider, Button } from 'native-base';

import {InputData} from './Components';
import FIREBASE from './../config/FIREBASE'

export default class TambahProduk extends Component {
    static navigationOptions = ({navigation})=>{
        return {
        title : 'Tambah Produk',
        headerStyle : {
            backgroundColor : '#6D73B5'
        },
        headerTintColor : '#fff',
        headerTitleStyle : {
            fontSize : 18
        }
    }
}
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      harga: '',
    };
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

//   onSubmit = () => {
//       console.log("Masuk Submit");
//       console.log(this.state);
//   }

  onSubmit = () => {
    if(this.state.nama && this.state.harga) {
      
      const produkReferensi = FIREBASE.database().ref('Produk');
      const produk = {
        nama: this.state.nama,
        harga: this.state.harga,
      }

      produkReferensi
        .push(produk)
        .then((data) => {
          Alert.alert('Sukses', 'Produk Tersimpan');
          this.props.navigation.replace('DaftarProduk');
        })
        .catch((error) => {
          console.log("Error : ", error);
        })


    }else {
      Alert.alert('Error', 'Nama dan Harga wajib diisi');
    }
    
  };

  render() {
    return (
      <View style={styles.pages}>
        <InputData
          label="Nama Produk"
          placeholder="Masukkan Nama Produk"
          onChangeText={this.onChangeText}
          value={this.state.nama}
          namaState="nama"
        />
        <InputData
          label="Harga Produk"
          placeholder="Masukkan Harga Produk"
          keyboardType="number-pad"
          onChangeText={this.onChangeText}
          value={this.state.harga}
          namaState="harga"
        />

<TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
          <Text style={styles.textTombol}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  tombol: {
    backgroundColor: '#6D73B5',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  textTombol: {
    color: 'white',
    textAlign: 'center',
  },
});