import { Text, View,StyleSheet,Image ,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import { Card } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";
import axios from 'axios';


axios
.get(`http://10.0.2.2:3000/api/doctor/profile`)
  .then((response) => {
    const fetchedData = response.data;
    console.log(response)
    console.log('GET isteği başarılı:');
    
    
  
  
  
  })
  .catch((error) => {
    console.error('GET isteği hatası:', error);
   
  });

function PatientCard(){
    return(
<View >
<Card containerStyle={styles.card_container}>

<View>
  <Image source={require('../../assets/image/kar.jpg')}
  style={styles.image_container}
  />
</View>


<View style={styles.all_text_container}>
<View>
  <Text style={styles.info_text}>İsim-Soyisim:</Text>
</View>

<View>
  <Text style={styles.info_text} >Yaşı:</Text>
</View>

<View>
  <Text style={styles.info_text}>Randevu Tarihi:</Text>
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',}}>
  <Text style={styles.info_text}>E-Nabız Bilgileri:</Text>
  <TouchableOpacity style={{paddingLeft:30}}>
  <Icon name="heartbeat" size={25} color="#ff0000" />
  <Text>İndir</Text>
  </TouchableOpacity>
  
</View>

</View>
</Card>
</View>
    )
}
export default PatientCard;

const styles = StyleSheet.create({
    card_container:{
        borderRadius:20
    },
    all_text_container:{
        position:'absolute',
        paddingLeft:110,
        margin:5
    }, image_background:{
        flex:1
    },
    image_container:{
        width:100,
        height:100,
        borderRadius:100
    },
    info_text:{
        fontSize:16
    }

})