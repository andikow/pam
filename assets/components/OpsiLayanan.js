import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView} from 'react-native'

const LAYANAN = ['REG', 'BEST', 'PRIORITY', 'SAME DAY'];

const OpsiLayanan = (props) => {

    const onPressItem = (layanan) => {
        props.changeModalVisibility1(false);
        props.setLayanan(layanan);
    }

    const layanan = LAYANAN.map((item, index) => {
        return(
            <TouchableOpacity
                style={styles.layanan}
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
            onPress={() => props.changeModalVisibility1(false)}
            style={styles.container}    
        >
            <View style={styles.modal}>
                <ScrollView>
                    {layanan}
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
    layanan:{
        alignItems:'flex-start'
    },
    text:{
        margin: 20,
        fontSize: 20,
        fontWeight:'bold' 
    }
})

export {OpsiLayanan}