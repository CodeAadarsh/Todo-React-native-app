import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, Modal, Alert } from 'react-native'
import React, { useState } from 'react'

import { TextInput, TouchableRipple } from 'react-native-paper'
import firestore from '@react-native-firebase/firestore';
import { SIZES } from '../utils/BasicComponents';

let namex;
const LoginPage = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [firstName,setFirstName]=useState('')
    const [lastName,setlastName]=useState('')
    const isLogin = () => {
        firestore()
        .collection('Users')
        // Filter results
        .where('email', '==', email.toLowerCase())
        .get()
        .then(querySnapshot => {
            /* ... */
            const name = querySnapshot.docs[0]._data.firstName;
            namex = name;
            console.log(querySnapshot.docs);
            if (querySnapshot.docs.length > 0){
                if (querySnapshot.docs[0]._data.email === email.toLowerCase() &&
                querySnapshot.docs[0]._data.password === password){
                    // Alert.alert('Welcome Back, '+ name   )
                    (navigation.replace('HomePage'))
                } else{
                    // console.log(name)
                    Alert.alert('Invalid Email Id or Password')
                    
                }
                console.log(querySnapshot.docs[0]._data.password + 
                    ' '+ querySnapshot.docs[0]._data.email );
                        
                    } else{
                        console.log('Account not found')
                        Alert.alert('Invalid Email Id or Password')
                    }
                })
                .catch(error =>{
                    console.log(error);
                });
                
                
            }
    const SAVEDATA = () => {
        
        firestore()
            .collection('Users')
            .add({
                firstName: firstName,
                lastName:lastName,
                email: email.toLowerCase(),
                password: password,

            })
            .then(() => {
                console.log('User added!');
            })
            .catch((error) => {
                console.error('Error adding user: ', error);
            });
        setModalVisible(false)
            console.log('Ending SAVEDATA function');
    }
    return (

        <View style={{ backgroundColor: '#55a6ff', height: SIZES.height }}>
            <StatusBar backgroundColor={'#55a6ff'} />
            <View style={{ flexDirection: 'column',alignSelf:'center',alignItems: 'center',borderRadius:20, height: 150, width: 150, margin: 50, borderWidth:2, borderColor:'#fff' }}>
                <Text style={{ fontWeight: '900', fontSize: 50, color: '#000' }}>Todo </Text>
                <Text style={{ fontWeight: '300', fontSize: 50, color: '#fff' }}>App</Text>
            </View>
            {/* <Image style={{  }} source={require('../../src/assets/images/Play.jpeg')} /> */}
            <View style={{ height: '60%', width: '85%', borderWidth: 0, alignSelf: 'center', justifyContent: 'space-evenly' }}>
                <View style={{ bottom: 10, borderWidth: 0 }}>
                    <TextInput
                        label="Email"
                        mode='outlined'
                        outlineColor='#3d2062'
                        placeholderTextColor={'#3d2062'}
                        textColor='#3d2062'
                        activeOutlineColor='#3d2062'
                      value={email}
                      onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        label="Password"
                        mode='outlined'
                        outlineColor='#3d2062'
                        placeholderTextColor={'#3d2062'}
                        textColor='#3d2062'
                        secureTextEntry
                        activeOutlineColor='#3d2062'
                      value={password}
                      onChangeText={(text) => (setPassword(text))}
                    />
                </View>
                <View style={{ borderWidth: 0 }}>
                    <TouchableRipple
                        style={{ alignItems: 'center', borderWidth: 0, padding: 15, backgroundColor: '#3d2062', borderRadius: 20, width: '80%', alignSelf: 'center' }}
                        onPress={() => {isLogin()}}
                        rippleColor="rgba(0, 0, 0, .32)"
                    >
                        <Text style={{ color: '#fff', fontSize: 25, fontWeight: '600' }}>Login</Text>
                    </TouchableRipple>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                        <Text style={{ color: '#fff' }}>Don't have Account? </Text>
                        <TouchableOpacity
                            style={{}}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={{ color: '#3d2062', fontSize: 16, fontWeight: '600' }}>Signup</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={{ backgroundColor: '#55a6ff', height: SIZES.height }}>
                    <StatusBar backgroundColor={'#55a6ff'} />
                    {/* <Image style={{ alignSelf: 'center',borderRadius:20, height: 150, width: 150, margin: 50 }} source={require('../../src/assets/images/Play.jpeg')} /> */}
                    <View style={{ flexDirection: 'column',alignSelf:'center',alignItems: 'center',borderRadius:20, height: 150, width: 150, margin: 50, borderWidth:2, borderColor:'#fff' }}>
                <Text style={{ fontWeight: '900', fontSize: 50, color: '#000' }}>Todo </Text>
                <Text style={{ fontWeight: '300', fontSize: 50, color: '#fff' }}>App</Text>
            </View>
                    <View style={{ height: '60%', width: '85%', borderWidth: 0, alignSelf: 'center', justifyContent: 'space-evenly' }}>
                        <View style={{ bottom: 10, borderWidth: 0 }}>
                            <TextInput
                                label="First Name"
                                mode='outlined'
                                outlineColor='#3d2062'
                                placeholderTextColor={'#3d2062'}
                                textColor='#3d2062'
                                activeOutlineColor='#3d2062'
                              value={firstName}
                              onChangeText={(text) => (setFirstName(text))}
                            />
                            <TextInput
                                label="Last Name"
                                mode='outlined'
                                outlineColor='#3d2062'
                                placeholderTextColor={'#3d2062'}
                                textColor='#3d2062'
                                activeOutlineColor='#3d2062'
                                value={lastName}
                                onChangeText={(text) => (setlastName(text))}
                            />
                            <TextInput
                                label="Email"
                                mode='outlined'
                                outlineColor='#3d2062'
                                placeholderTextColor={'#3d2062'}
                                textColor='#3d2062'
                                activeOutlineColor='#3d2062'
                              value={email}
                              onChangeText={(text) => {setEmail(text)}}
                            />
                            <TextInput
                                label="Password"
                                mode='outlined'
                                outlineColor='#3d2062'
                                placeholderTextColor={'#3d2062'}
                                textColor='#3d2062'
                                secureTextEntry
                                activeOutlineColor='#3d2062'
                                value={password}
                                onChangeText={(text) => {setPassword(text)}}
                            />
                        </View>
                        <View style={{ borderWidth: 0 }}>
                            <TouchableRipple
                                style={{ alignItems: 'center', borderWidth: 0, padding: 15, backgroundColor: '#3d2062', borderRadius: 20, width: '80%', alignSelf: 'center' }}
                                onPress={() => {SAVEDATA()}}
                                rippleColor="rgba(0, 0, 0, .32)"
                            >
                                <Text style={{ color: '#fff', fontSize: 25, fontWeight: '600' }}>Signup</Text>
                            </TouchableRipple>
                            <View style={{ alignSelf: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                                <Text style={{ color: '#fff' }}>Already have Account? </Text>
                                <TouchableOpacity
                                    style={{}}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={{ color: '#3d2062', fontSize: 16, fontWeight: '600' }}>Login</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>
                </View>





            </Modal>
        </View>
    )
}

export default LoginPage
export {namex};
const styles = StyleSheet.create({})


