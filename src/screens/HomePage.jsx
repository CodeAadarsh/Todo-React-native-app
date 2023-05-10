import { Image, ScrollView, StatusBar, StyleSheet, Text, View,FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Colors, SIZES } from '../utils/BasicComponents'
import { Button, FAB, TextInput } from 'react-native-paper';
import { namex } from './LoginPage';
import firestore from '@react-native-firebase/firestore';
import Todo from './Todo';

console.log(SIZES.height, SIZES.width)
const HomePage = () => {

  const [ todo, setTodo ] = useState('');
  const [ loading, setLoading ] = useState(true);
  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const { title, complete } = doc.data();
        list.push({
          id: doc.id,
          title,
          complete,
        });
      });

      setTodos(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);


  const ref = firestore().collection('todos');
  async function addTodo() {
    await ref.add({
      title: todo,
      complete: false,
    });
    setTodo('');
  }
  

  return (
    <View style={{width:SIZES.width,height:SIZES.height, backgroundColor:Colors.main}}>
        <StatusBar backgroundColor={Colors.main}/>
      <View style={styles.Header}>
        <View style={styles.Container1}>
        <Text style={styles.MainText}>Hi {namex}</Text>
        <Text style={styles.SecondoryText} >You have 5 Task Today</Text>
        </View>
        <View style={{justifyContent:'center'}}>
        {/* <Text>Hello</Text> */}
        </View>
      </View>
    <ScrollView style={{padding:10}} horizontal showsHorizontalScrollIndicator={false} >
        <Image style={{height:150,width:225,borderRadius:20,margin:10}} source={require('../assets/images/Work.jpeg')}/>
        <Image style={{height:150,width:225,borderRadius:20,margin:10}} source={require('../assets/images/Play.jpeg')}/>
        <Image style={{height:150,width:225,borderRadius:20,margin:10}} source={require('../assets/images/Productive.jpeg')}/>
    </ScrollView>
    <FlatList
        style={{height:'30%',}}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Todo {...item} />}
      />
      <TextInput label={'New Todo'} value={todo} onChangeText={setTodo} />
            <Button onPress={() => {addTodo()}}>Add TODO</Button>


    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
Header:{ borderWidth:0,height:100,flexDirection:'row',justifyContent:'space-between'},
Container1:{borderWidth:0,flexDirection:'column', width:SIZES.width*0.5,justifyContent:'center', left:10},
SecondoryText:{fontWeight:'600',fontSize:15,color:Colors.secondory},
MainText:{fontWeight:'900',fontSize:35,color:Colors.secondory},
fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },

})

