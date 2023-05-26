import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import {React} from 'react';
import { increment,decrement,changeValue } from '../../src/redux/action';
import { useSelector,useDispatch } from 'react-redux';

const Home = (props) => {
  const number = useSelector((state)=>state.num)
  const change = useSelector((state)=>state.changeValue)
  const dispatch = useDispatch()

  const onAdd = ()=>{
    dispatch((increment(number)))
    }
  
  const onDec = ()=>{
    dispatch((decrement(number)))
    }
 
  return (
    <View style={styles.main}>
      <Text style={styles.numberStyle}>{number}</Text>
      <View style={styles.container}>
        <TouchableOpacity style = {styles.ButtonStyle} onPress={onAdd}>
          <Text style={styles.btnText}>Increase</Text>
         </TouchableOpacity>
        <TouchableOpacity style = {styles.ButtonStyle} onPress={onDec}>
          <Text style={styles.btnText}>Decrease</Text>
        </TouchableOpacity>
      </View>
      <TextInput placeholder='Enter Number'
          style = {styles.inputField}
          value = {change}
          onChangeText={text=>dispatch({type:'CHANGE', payload: text })}
      /> 
    </View>
  );
};
const styles = StyleSheet.create({
    main:{
        justifyContent:'center',
        alignItems:'center'
      },
      container:{
        flexDirection:"row",
        justifyContent:'space-between',
        
      },
      numberStyle:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:20,
      },
      btnText:{
        color:'white',
        fontSize:20,
        fontWeight:'600'
      },
      ButtonStyle:{
        backgroundColor:'black',
        width:'35%',
        padding:15,
        marginHorizontal:20,
        borderRadius:20,
        alignItems:"center",  
      },
      inputField:{
          borderWidth:1,
          padding:20,
          marginTop:20,
          borderRadius:20,
          fontSize:20, 
          width:150
      }
});
export default Home;