
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faPlus} from '@fortawesome/free-solid-svg-icons';
// import FIREBASE from '../../config/FIREBASE';
// import CardKontak from '../../components/CardKontak';


import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Linking} from 'react-native';
import IconPlus from 'react-native-vector-icons/AntDesign';
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material.js';
import { Container, Header, StyleProvider, Button, List, ListItem} from 'native-base';
import FIREBASE from './../config/FIREBASE';
import CardProduk from './Components/CardProduk';

export default class DaftarProduk extends Component {
    static navigationOptions = ({navigation})=>{
        return {
        title : 'Daftar Produk',
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
      produks: {},
      produksKey: [],
    };
  }

  componentDidMount() {
    this.ambilData();
  }

  ambilData = () => {
    FIREBASE.database()
      .ref('Produk')
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let produkItem = {...data};

        this.setState({
          produks: produkItem,
          produksKey: Object.keys(produkItem),
        });
      });
  };

//   removeData = (id) => {
//     Alert.alert(
//       'Info',
//       'Anda yakin akan menghapus Data Kontak ?',
//       [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel',
//         },
//         {
//           text: 'OK',
//           onPress: () => {
//             FIREBASE.database()
//               .ref('Kontak/' + id)
//               .remove();
//             this.ambilData();
//             Alert.alert('Hapus', 'Sukses Hapus Data');
//           },
//         },
//       ],
//       {cancelable: false},
//     );
//   };

  render() {
    const {produks, produksKey} = this.state;
    return (
    <StyleProvider style={getTheme(material)}>
        <Container>

        <View style={styles.listKontak}>
          {produksKey.length > 0 ? (
            produksKey.map((key) => (

                <CardProduk key={key} produkItem={produks[key]} id={key} />
            
            //   <CardKontak
            //     key={key}
            //     kontakItem={kontaks[key]}
            //     id={key}
            //     {...this.props}
            //     removeData={this.removeData}
            //   />
            ))
          ) : (
            <Text></Text>
          )}
        </View>

        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.btnTambah}
            onPress={()=> this.props.navigation.navigate('TambahProduk')}>
            <IconPlus name="plus" size={20} color={'white'}  />
          </TouchableOpacity>
        </View>
      </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20
      },
  page: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  garis: {
    borderWidth: 1,
    marginTop: 10,
  },
  listKontak: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  wrapperButton: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
  },
  btnTambah: {
    padding: 20,
    backgroundColor: '#6D73B5',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  harga: {
    fontSize: 12,
    color: 'gray',
  },
});