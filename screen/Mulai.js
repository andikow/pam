import React, { Component } from 'react';
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
    Dimensions,
    } from 'react-native';

const images = [
    'https://i.postimg.cc/g2XKy8X0/buatlabel.png',
    'https://i.postimg.cc/zvWYsV3S/cekongkir.png',
    'https://i.postimg.cc/pXftkhwP/ingatkanpelanggan.png',
    'https://i.postimg.cc/XYx66MNh/kelolatransaksi.png',
    'https://i.postimg.cc/DzZk2C8z/kiriminvoice.png'
]
    

class Mulai extends Component{
    constructor(props) {
        super(props);
        this.state = {
            active:0
        }
    }

    change (nativeEvent){
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide!== this.state.active) {
            this.setState({
                active: slide
            })
        }
    }

    static navigationOptions = ({navigation}) =>{
      return {
        headerShown:false
      }
    }

    render() {
        const {active}= this.state;
        return(
            <SafeAreaView style={styles.container}>
            <View style={{alignItems:'center',justifyContent:'center',marginVertical:20}}>
                <Image
                     style={{width:100,height:100}}
                     source={require('../assets/images/logo.png')}
                />  
            </View>
                <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => this.change(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >
                {
                    images.map((e, index) =>
                    <Image
                    key={e}
                    resizeMode="stretch"
                    style={styles.wrap}
                    source={{ uri:e }}
                    /> 
                    )
                }
                </ScrollView>
                <View style={styles.wrapDot}>
                    {
                        images.map((e, index) => 
                        <Text 
                            key={e}
                            style={active === index ? styles.dotActive : styles.dot}>●</Text>)
                    }
                    
                </View>
                </View>
            <View style={{paddingTop:50,paddingHorizontal:50}}>  
            <Button
             title="Masuk dengan E-mail" 
              color='#6d73b5'
              onPress={()=> this.props.navigation.navigate('CekAkun')}
            /> 
            </View>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container:{flex:1},
    wrap: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.6
    },
    wrapDot:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignSelf:'center'
    },
    dot: {
        margin: 3,
        color:'black',
    },
    dotActive: {
        margin: 3,
        color:'white',
    }

});
export default Mulai;