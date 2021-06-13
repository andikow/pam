  
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const CardProduk = ({id, produkItem}) => {
  return (
    <TouchableOpacity
      style={styles.container}>
      <View>

        <Text style={styles.nama}>{produkItem.nama}</Text>
        <Text style={styles.harga}>{produkItem.harga}</Text>
      </View>
      {/* <View style={styles.icon}>
        <FontAwesomeIcon icon={faEdit} color={'orange'} size={25} onPress={() => navigation.navigate('EditKontak', {id: id})}/>
        <FontAwesomeIcon icon={faTimes} color={'red'} size={25} onPress={() => removeData(id)}/>
      </View> */}
    </TouchableOpacity>
  );
};

export default CardProduk;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 20,
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
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});