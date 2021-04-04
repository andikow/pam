import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    checkboxContainer: {
      flexDirection: "row",

    },
    checkbox: {
      alignSelf: "center"
    },
    label: {
      padding:8
    },
    cardbox:{
        borderColor:'#17a2b8',
        marginTop:20,
        marginBottom:20,
        marginLeft:10,
        marginRight:10,
        padding:10,
        backgroundColor:'#FFF8DC'
    }
  });

const App = () => {
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(false);
  const [isSelected5, setSelection5] = useState(false);
  const [isSelected6, setSelection6] = useState(false);

  return (
    <View style={styles.container}>

    <View style={styles.cardbox}>

        <Text style={{textAlign:'center', color:'#696969'}}>Ekspedisi yang dipilih akan digunakan di fitur cek ongkir sebagai pilihan pengiriman. Kamu hanya akan melihat pilihan servis berdasarkan ekspedisi yang dipilih</Text>

    </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected}  onValueChange={setSelection} style={styles.checkbox} />
        <Text style={styles.label}>Go Send</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected1}  onValueChange={setSelection1} style={styles.checkbox} />
        <Text style={styles.label}>J&T</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected2}  onValueChange={setSelection2} style={styles.checkbox} />
        <Text style={styles.label}>JNE</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected3}  onValueChange={setSelection3} style={styles.checkbox} />
        <Text style={styles.label}>JX</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected4}  onValueChange={setSelection4} style={styles.checkbox} />
        <Text style={styles.label}>Pos Indonesia</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected5}  onValueChange={setSelection5} style={styles.checkbox} />
        <Text style={styles.label}>SiCepat</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isSelected6}  onValueChange={setSelection6} style={styles.checkbox} />
        <Text style={styles.label}>Wahana</Text>
      </View>
    </View>
  );
};

export default App;
