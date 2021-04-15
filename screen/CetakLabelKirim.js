import React, { useState } from 'react'; 
import { SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Modal,
    Alert,
    Button
    } from 'react-native'; 
import {OpsiEkspedisi} from '../assets/components/OpsiEkspedisi';
import {OpsiLayanan} from '../assets/components/OpsiLayanan';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';



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


    const alertCetakLabel = () =>{
    Alert.alert(
    "Label berhasil dibuat", 
    "Label pengiriman berhasil dibuat dan dikirimkan ke email Anda",
    [{text:"OK", onPress: () => console.log("alert closed")}])}


    navigationOptions = ({navigation})=>{ 
        return {
            title : 'Cetak Label Pengiriman', 
            headerStyle : {
                backgroundColor : "#6D73B5"
            },
            headerTintColor : '#fff', 
            }
        }

    return(
        <ScrollView style={{padding:10, backgroundColor:'#224f69'}}>
            <View style={{marginTop:50}}>
            <View style={styles.title}>
                <Text style={styles.title}>DETAIL PENERIMA</Text>
            </View>
            </View>
            <Grid>
                <Col style={styles.icon}>
                    <Icon name="user" size={26} color="#6D73B5" />
                </Col>
                <Col>
                    <Row>
                        <Text style={styles.judul}>Nama Penerima</Text>
                    </Row>
                    <Row style={styles.data}>
                    <TextInput
                            placeholder="Nama Penerima"
                            placeholderTextColor="grey"
                            autoCapitalize="words"
                            keyboardType="default"
                            returnKeyType="next"
                            defaultValue="Vandarina Risca"
                    />
                    </Row>
                </Col>
            </Grid>

            <Grid>
                <Col style={styles.icon}>
                    <Icon name="phone" size={26} color="#6D73B5" />
                </Col>
                <Col>
                    <Row>
                        <Text style={styles.judul}>No. Telp Penerima</Text>
                    </Row>
                    <Row style={styles.data}>
                    <TextInput
                            placeholder="No. Telp Penerima"
                            placeholderTextColor="grey"
                            keyboardType="number-pad"
                            returnKeyType="next"
                            defaultValue="085624742052"
                    />
                    </Row>
                </Col>
            </Grid>

            <Grid>
                <Col style={styles.icon}>
                    <Icon2 name="md-location" size={26} color="#6D73B5" />
                </Col>
                <Col>
                    <Row>
                        <Text style={styles.judul}>Alamat Penerima</Text>
                    </Row>
                    <Row style={styles.data}>
                    <TextInput
                            placeholder="Alamat Penerima"
                            placeholderTextColor="grey"
                            autoCapitalize="words"
                            keyboardType="default"
                            returnKeyType="next"
                            defaultValue="Jln. Merbau No. 123"
                    />
                    </Row>
                </Col>
            </Grid>

            <View style={{marginTop:50}}>
            <View style={styles.title}>
                <Text style={styles.title}>DETAIL PENGIRIM</Text>
            </View>
            </View>
            <Grid>
                <Col style={styles.icon}>
                    <Icon name="user" size={26} color="#6D73B5" />
                </Col>
                <Col>
                    <Row>
                        <Text style={styles.judul}>Nama Pengirim</Text>
                    </Row>
                    <Row style={styles.data}>
                    <TextInput
                            placeholder="Nama Pengirim"
                            placeholderTextColor="grey"
                            autoCapitalize="words"
                            keyboardType="default"
                            returnKeyType="next"
                            defaultValue="E-stock Shop Indonesia"
                    />
                    </Row>
                </Col>
            </Grid>

            <Grid>
                <Col style={styles.icon}>
                    <Icon name="phone" size={26} color="#6D73B5" />
                </Col>
                <Col>
                    <Row>
                        <Text style={styles.judul}>No. Telp Pengirim</Text>
                    </Row>
                    <Row style={styles.data}>
                    <TextInput
                            placeholder="No. Telp Pengirim"
                            placeholderTextColor="grey"
                            keyboardType="number-pad"
                            returnKeyType="next"
                            defaultValue="08123456789"
                    />
                    </Row>
                </Col>
            </Grid>

            <Grid>
                <Col style={styles.icon}>
                    <Icon3 name="truck-fast-outline" size={26} color="#6D73B5" />
                </Col>
                <Col>
                    <Row>
                        <Col><Text style={styles.judul}>Ekspedisi</Text></Col>
                        <Col><Text style={styles.judul}>Layanan</Text></Col>
                    </Row>
                    <Row>
                        <Col style={{paddingRight:0}}>
                        <TouchableOpacity 
                            onPress={() => changeModalVisibility(true)}    
                        >
                        <Text style={styles.pilihan}>{chooseEkspedisi}</Text>
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
                        <Col style={{paddingLeft:10}}>
                            <TouchableOpacity 
                                onPress={() => changeModalVisibility1(true)}    
                            >
                            <Text style={styles.pilihan}>{chooseLayanan}</Text>
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

            <View style={{paddingHorizontal:5, paddingBottom:100, paddingTop:50}}>  
            <Button
                title="Cetak Label Pengiriman" 
                color='#6d73b5'
                onPress={alertCetakLabel}
            /> 
            </View>



        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 11,
        color: '#A0A0A0',
        backgroundColor: '#6d73b5',
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
        marginTop:-20,
        borderBottomWidth:1,
        borderBottomColor:"#6d73b5",
      },
      pilihan: {
        borderBottomWidth:1,
        borderBottomColor:"#6d73b5",
      },
      cetak: {
        padding: 10,
        margin: 10,
        color:'#6d73b5',
      },
      cetaktext: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
      },
});

export default CetakLabelKirim;