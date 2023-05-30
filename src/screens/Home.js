import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import {React} from 'react';
import { increment,decrement,changeValue,changeTheme } from '../../src/redux/action';
import { useSelector,useDispatch } from 'react-redux';
import { colors } from '../config/colors'

const Home = (props) => {

  const dispatch = useDispatch()
  const number = useSelector((state)=> state.counterReducer.num)
  const change = useSelector((state)=>state.changeValue)
  const theme = useSelector((state)=>state)
  const selectedTheme = theme.ThemeReducer

  
  const _styles = styles(colors(selectedTheme));

  const onAdd = ()=>{
    dispatch((increment(number)))
    }
  
  const onDec = ()=>{
    dispatch((decrement(number)))
    }
 
  return (
    <View style={_styles.main}>
      
      <Text style={_styles.numberStyle}>{number}</Text>
      <View style={_styles.container}>
        <TouchableOpacity style = {_styles.ButtonStyle} onPress={onAdd}>
          <Text style={_styles.btnText}>Increase</Text>
         </TouchableOpacity>
        <TouchableOpacity style = {_styles.ButtonStyle} onPress={onDec}>
          <Text style={_styles.btnText}>Decrease</Text>
        </TouchableOpacity>
      </View>
      <TextInput placeholder='Enter Number'
          style = {_styles.inputField}
          value = {change}
          onChangeText={text=>dispatch({type:'CHANGE', payload: text })}
      /> 
      <TouchableOpacity style = {_styles.btnTheme}
        onPress={()=> {
          if(selectedTheme == false){
            dispatch(changeTheme(true))
          }else{
            dispatch(changeTheme(false))
          }
        }}   
      >
        <Text style={_styles.btnText}>Change Theme</Text>
        </TouchableOpacity>
        </View>
    
  );
};
const styles = (theme) => StyleSheet.create({
  main :{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: theme.primary,
      width:400,
    },
      container:{
        flexDirection:"row",
        justifyContent:'space-between', 
      },
      numberStyle: {
        fontSize:40,
        fontWeight:'bold',
        marginBottom:20,
        color: theme.color
      },
      btnText: {
          color: theme.text,
          fontSize:20,
          fontWeight:'600'
      },
      ButtonStyle: {
        backgroundColor: theme.buttonBackground,
        width:'35%',
        padding:15,
        marginHorizontal:20,
        borderRadius:20,
        alignItems:"center",
      },
      inputField: {
          borderWidth:1,
          borderColor: theme.borderColor,
          color: theme.color,
          padding:20,
          marginTop:20,
          borderRadius:20,
          fontSize:20, 
          width:150
      },
      btnTheme: {
        backgroundColor:theme.buttonBackground,
        width:'60%',
        padding:15,
        marginTop:40,
        marginHorizontal:20,
        borderRadius:20,
        alignItems:"center",
      },
});
export default Home;