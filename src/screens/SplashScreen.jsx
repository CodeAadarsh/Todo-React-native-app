import { StyleSheet, Text, View, StatusBar, } from 'react-native'
import React, {useEffect} from 'react'
import { SIZES } from '../utils/BasicComponents'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('LoginPage')
        }, 2000)

    }, [])

    return (
        <View style={{ height: SIZES.height, width: SIZES.width, alignItems: 'center', justifyContent: 'center', backgroundColor: "#55a6ff" }}>
            {/* <Text style={{fontSize:}}>-</Text> */}
            <StatusBar backgroundColor={'#55a6ff'} />
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: '900', fontSize: 50, color: '#000' }}>Todo </Text>
                <Text style={{ fontWeight: '300', fontSize: 50, color: '#fff' }}>App</Text>
            </View>
            <View style={{ borderWidth: 1, top: 5, padding: 5, flexDirection: 'row', borderColor: '#fff' }}>
                <Text style={{ color: '#fff', }}>Crafted by </Text>
                <Text style={{ color: '#000', fontWeight: '600' }}>Aadarsh Verma </Text>

            </View>

            {/* <Text>-</Text> */}
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})