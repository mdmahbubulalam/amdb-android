/* eslint-disable prettier/prettier */
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#272626',
    flex:1,
    paddingBottom:10
  },
    main: {
      display:'flex', 
      flexDirection: 'row', 
      flexWrap:'wrap',
      justifyContent: 'center', 
      alignItems: 'center' ,
    },

    movieCard:{
      padding:5,

    },

    titleText : {
      fontSize: 18, 
      color:'#00e1ff', 
      borderRadius:5
    },
    image:{
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap',
      height:100,
      width: 100,
    },
    input:{
      borderWidth:2,
      backgroundColor:'#ffffff',
      width:350,
      height:40,
      padding:8,
      marginTop:10,
      borderRadius:8
    }

   
  });

  // eslint-disable-next-line no-undef
  export default styles;