import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import {React} from 'react';
import { increment,decrement,changeValue,changeTheme } from '../../src/redux/action';
import { useSelector,useDispatch } from 'react-redux';

const Home = (props) => {

  const dispatch = useDispatch()
  const number = useSelector((state)=> state.counterReducer.num)
  const change = useSelector((state)=>state.changeValue)
  const theme = useSelector((state)=>state)
  const selectedTheme = theme.ThemeReducer

  // console.log('theme value', selectedTheme)

  const onAdd = ()=>{
    dispatch((increment(number)))
    }
  
  const onDec = ()=>{
    dispatch((decrement(number)))
    }
 
  return (
    <View style={styles.main(selectedTheme)}>
      
      <Text style={styles.numberStyle(selectedTheme)}>{number}</Text>
      <View style={styles.container}>
        <TouchableOpacity style = {styles.ButtonStyle(selectedTheme)} onPress={onAdd}>
          <Text style={styles.btnText(selectedTheme)}>Increase</Text>
         </TouchableOpacity>
        <TouchableOpacity style = {styles.ButtonStyle(selectedTheme)} onPress={onDec}>
          <Text style={styles.btnText(selectedTheme)}>Decrease</Text>
        </TouchableOpacity>
      </View>
      <TextInput placeholder='Enter Number'
          style = {styles.inputField(selectedTheme)}
          value = {change}
          onChangeText={text=>dispatch({type:'CHANGE', payload: text })}
      /> 
      <TouchableOpacity style = {styles.btnTheme(selectedTheme)}
        onPress={()=> {
          if(selectedTheme == false){
            dispatch(changeTheme(true))
          }else{
            dispatch(changeTheme(false))
          }
        }}   
      >
        <Text style={styles.btnText(selectedTheme)}>Change Theme</Text>
        </TouchableOpacity>
        </View>
    
  );
};
const styles = StyleSheet.create({

  main :(main) =>{
    return{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:main?'white':'black',
      width:400,
      }
    },
      container:{
        flexDirection:"row",
        justifyContent:'space-between',
        
      },
      numberStyle:(numberStyle)=>{
        return{
        fontSize:40,
        fontWeight:'bold',
        marginBottom:20,
        color:numberStyle?"black":'white'
        }
      },
      btnText:(btnText)=>{
        return{
          color:btnText?'white':'black',
          fontSize:20,
          fontWeight:'600'
        }
      },
      ButtonStyle:(ButtonStyle)=>{
        return{
        backgroundColor:ButtonStyle?'black':'white',
        width:'35%',
        padding:15,
        marginHorizontal:20,
        borderRadius:20,
        alignItems:"center",
        }  
      },
      inputField:(inputField)=>{
        return{
          borderWidth:1,
          borderColor:inputField?"black":'white',
          color:inputField?"black":'white',
          padding:20,
          marginTop:20,
          borderRadius:20,
          fontSize:20, 
          width:150
        }
      },
      btnTheme:(btnTheme)=>{
        return{
        backgroundColor:btnTheme?'black':'white',
        width:'60%',
        padding:15,
        marginTop:40,
        marginHorizontal:20,
        borderRadius:20,
        alignItems:"center",
        }  
      },
});
export default Home;