import React, { useState } from 'react'; 
import { SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    Image,
    Alert,
    TouchableOpacity,
    Modal
    } from 'react-native'; 
import {OpsiEkspedisi} from './OpsiEkspedisi';
import {OpsiLayanan} from './OpsiLayanan';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'



const CetakLabelKirim = () => {
    const [chooseEkspedisi, setchooseEkspedisi] = useState('Pilih Ekspedisi');
    const [isModalVisible, setisModalVisible] = useState(false);
    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setEkspedisi = (ekspedisi) => {
        setchooseEkspedisi(ekspedisi)
    }

    const [chooseLayanan, setchooseLayanan] = useState('Pilih Layanan');
    const [isModalVisible1, setisModalVisible1] = useState(false);
    const changeModalVisibility1 = (bool) => {
        setisModalVisible1(bool)
    }

    const setLayanan = (layanan) => {
        setchooseLayanan(layanan)
    }


    const alertPassBaru = () =>
Alert.alert(
  "Label berhasil dibuat", 
  "Label pengiriman berhasil dibuat dan dikirimkan ke email Anda",
[{text:"OK", onPress: () => console.log("alert closed")}])

    return(
        <ScrollView style={{padding:10}}>
            <Grid style={{paddingTop:50}}>
                <Col>
                <Text style={styles.label}>DETAIL PENERIMA</Text>
                </Col>
            </Grid>

            <Grid style={styles.grid}>
                <Col size={1}>
                    <Icon name="user" size={60} color="#6d73b5" style={{padding:10}}></Icon>
                </Col>
                <Col size={4}>
                    <Row><Text style={styles.label2}>Nama Penerima</Text></Row>
                    <Row style={{borderBottomWidth:1, marginRight:30}}><TextInput
                            style={styles.input}
                            autoCapitalize="words"
                            keyboardType="default"
                            returnKeyType="next"
                            defaultValue="Bintang"
                        />
                    </Row>
                </Col>
            </Grid>

            <Grid style={styles.grid}>
                <Col size={1}>
                    <Icon name="phone" size={60} color="#6d73b5" style={{padding:10}}></Icon>
                </Col>
                <Col size={4}>
                    <Row><Text style={styles.label2}>No. Telp Penerima</Text></Row>
                    <Row style={{borderBottomWidth:1, marginRight:30}}><TextInput
                            style={styles.input}
                            autoCapitalize="words"
                            keyboardType="number-pad"
                            returnKeyType="next"
                            defaultValue="08123456789"
                        />
                    </Row>
                </Col>
            </Grid>

            <Grid style={styles.grid}>
                <Col size={1}>
                    <Icon2 name="md-location" size={60} color="#6d73b5" style={{padding:10}}></Icon2>
                </Col>
                <Col size={4}>
                    <Row><Text style={styles.label2}>Alamat Penerima</Text></Row>
                    <Row style={{borderBottomWidth:1, marginRight:30}}><TextInput
                            style={styles.input}
                            autoCapitalize="words"
                            keyboardType="default"
                            returnKeyType="next"
                            defaultValue="Jl. Thamrin no 17"
                        />
                    </Row>
                </Col>
            </Grid>

            <Grid style={{paddingTop:50}}>
                <Col>
                <Text style={styles.label}>DETAIL PENGIRIM</Text>
                </Col>
            </Grid>

            <Grid style={styles.grid}>
                <Col size={1}>
                    <Icon name="user" size={60} color="#6d73b5" style={{padding:10}}></Icon>
                </Col>
                <Col size={4}>
                    <Row><Text style={styles.label2}>Nama Pengirim</Text></Row>
                    <Row style={{borderBottomWidth:1, marginRight:30}}><TextInput
                            style={styles.input}
                            autoCapitalize="words"
                            keyboardType="default"
                            returnKeyType="next"
                            defaultValue="Bulan Shop"
                        />
                    </Row>
                </Col>
            </Grid>

            <Grid style={styles.grid}>
                <Col size={1}>
                    <Icon name="phone" size={60} color="#6d73b5" style={{padding:10}}></Icon>
                </Col>
                <Col size={4}>
                    <Row><Text style={styles.label2}>No. Telp Pengirim</Text></Row>
                    <Row style={{borderBottomWidth:1, marginRight:30}}><TextInput
                            style={styles.input}
                            autoCapitalize="words"
                            keyboardType="number-pad"
                            returnKeyType="next"
                            defaultValue="08987654321"
                        />
                    </Row>
                </Col>
            </Grid>

            <Grid style={styles.grid}>
                <Col size={1}>
                    <Icon2 name="logo-dropbox" size={60} color="#6d73b5" style={{padding:10}}></Icon2>
                </Col>
                <Col size={4}>
                    <Row>
                        <Col><Text style={styles.label2}>Ekspedisi</Text></Col>
                        <Col><Text style={styles.label2}>Layanan</Text></Col>
                    </Row>
                    <Row>
                        <Col style={{borderBottomWidth:1, marginRight:30}}>
                        <TouchableOpacity 
                            style={styles.touchableOpacity}
                            onPress={() => changeModalVisibility(true)}    
                        >
                        <Text style={styles.text}>{chooseEkspedisi}</Text>
                        </TouchableOpacity>
                        <Modal
                            transparent={true}
                            animationType="fade"
                            visible={isModalVisible}
                            nRequestClose={() => changeModalVisibility(false)}
                        >
                        <OpsiEkspedisi 
                                changeModalVisibility={changeModalVisibility}
                                setEkspedisi={setEkspedisi}
                        />
                        </Modal>
                        </Col>
                        <Col style={{borderBottomWidth:1, marginRight:30}}>
                            <TouchableOpacity 
                                style={styles.touchableOpacity}
                                onPress={() => changeModalVisibility1(true)}    
                            >
                            <Text style={styles.text}>{chooseLayanan}</Text>
                            </TouchableOpacity>
                            <Modal
                                transparent={true}
                                animationType="fade"
                                visible={isModalVisible1}
                                nRequestClose={() => changeModalVisibility1(false)}
                            >
                            <OpsiLayanan 
                                    changeModalVisibility1={changeModalVisibility1}
                                    setLayanan={setLayanan}
                            />
                            </Modal>
                        </Col>
                    </Row>
                </Col>
            </Grid>

        <SafeAreaView style={styles.container}>

        </SafeAreaView>

            <View style={{paddingHorizontal:20, paddingBottom:100}}>  
            <Button
             title="Cetak Label Pengiriman" 
              color='#6d73b5'
              onPress={alertPassBaru}
            /> 
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems:'center', justifyContent:'center',padding:20
    },

    text: {
        marginVertical:20, fontSize:20
    },

    touchableOpacity: {

    },
    label : {fontSize: 20},
    label2 : {height: 20, fontSize: 15},
    input : {height: 40, fontSize: 20},
    grid:{paddingTop:10}
});

export default CetakLabelKirim;