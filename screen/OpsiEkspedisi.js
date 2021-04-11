import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView} from 'react-native'

const EKSPEDISI = ['Go-Send', 'JNE', 'JNT', 'JX', 'Pos Indonesia', 'Si Cepat', 'Wahana'];

const OpsiEkspedisi = (props) => {

    const onPressItem = (ekspedisi) => {
        props.changeModalVisibility(false);
        props.setEkspedisi(ekspedisi);
    }

    const ekspedisi = EKSPEDISI.map((item, index) => {
        return(
            <TouchableOpacity
                style={styles.ekspedisi}
                key={index}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
                
            </TouchableOpacity>
        )
    })
    return (
        <TouchableOpacity
            onPress={() => props.changeModalVisibility(false)}
            style={styles.container}    
        >
            <View style={styles.modal}>
                <ScrollView>
                    {ekspedisi}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1, paddingHorizontal:100, paddingTop:460        
    },
    modal:{
        backgroundColor: 'white',
        borderRadius:10,
        borderWidth:1,
        height:200,
        width:200,
    },
    ekspedisi:{
        alignItems:'flex-start'
    },
    text:{
        margin: 20,
        fontSize: 20,
        fontWeight:'bold' 
    }
})

export {OpsiEkspedisi}