import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {React} from 'react';
import { increment,decrement } from '../../src/redux/action';
import { useSelector,useDispatch } from 'react-redux';


const Home = (props) => {

  const number = useSelector((state)=>state.num)
   const dispatch = useDispatch()

  const onAdd = ()=>{
    dispatch((increment(number)))
}
  
  const onDec = ()=>{
    dispatch((decrement(number)))
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.fontStyle}>{number}</Text>
      <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:"center"}}>
        <TouchableOpacity style = {styles.incButton} onPress={onAdd}>
          <Text style={{color:'white',fontSize:20}}>Increase</Text>
         </TouchableOpacity>
        <TouchableOpacity style = {styles.decButton} onPress={onDec}>
          <Text style={{color:'white',fontSize:20}}>Decrease</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      fontStyle:{
        fontSize:30,
        fontWeight:'bold'
      },
      incButton:{
        backgroundColor:'blue',
        width:'35%',
        padding:15,
        marginHorizontal:20,
        borderRadius:20,
        alignItems:"center" 
      },
      decButton:{
        backgroundColor:'blue',
        width:'35%',
        padding:15,
        marginHorizontal:20,
        borderRadius:20,
        alignItems:'center' 
      }
});
export default Home;