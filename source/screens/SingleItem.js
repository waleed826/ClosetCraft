import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ApiCall } from '../WebHandler/WebHandler'
import Urls from '../WebHandler/Urls'
import StarRating from 'react-native-star-rating-widget';
import theme from '../utils/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ModalScreen from '../components/ModalScreen';

const SingleItem = ({ route,navigation }) => {
  const { id } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  // console.log("🚀 ~ file: SingleItem.js:8 ~ SingleItem ~ id:", id)
  const [rating, setRating] = useState();
   const modal =()=>{
    setModalVisible(

      <ModalScreen
      isVisible={!modalVisible}
      />
    )
   }

  return (
    
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <View style={{  padding: 10, }}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
        <FontAwesome name='angle-left' size={30} color='black' onPress={()=>navigation.replace('hsn')}/>
        <FontAwesome name='cart-plus' size={30} color='black' 
        onPress={()=>navigation.navigate('crt')}
         />
        </View>
        <Image source={{ uri: id.image }} resizeMode='stretch' style={{ height: 200, width: 200, alignSelf:'center' }} />
      </View>
      <View style={{backgroundColor:'rgba(151, 117, 250, 0.4)',margin:10,borderRadius:25}}>
        <Text style={{ fontSize: 20., color: 'black', fontFamily: theme.fonts.medium, textAlign: 'center' }}> {id.title}</Text>
        <Text style={{ fontSize: 20., color: 'black', fontFamily: theme.fonts.semiBold,marginHorizontal:20 }}>Description:{'\n'}
        </Text>
        <Text style={{ fontSize: 15., color: 'rgba(128,128,128,1)', fontFamily: theme.fonts.light, marginHorizontal: 20 }}>{id.description}</Text>
        <View style={{ flexDirection: 'row', padding: 10, margin: 10, alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 15, fontFamily: theme.fonts.light, color: 'black' }} >Revivews: {id.rating.count}</Text>
          <View>

            <Text style={{ fontSize: 15, color: 'gray', fontFamily: theme.fonts.light, textAlign: 'center' }}>Rating</Text>
            <StarRating
              starSize={15}
              color='rgba(255, 152, 31, 1)'
              starStyle={{}}
              style={{}}
              rating={id.rating.rate}
            // onChange={setRating}
            />
          </View>
        </View>
        {/* <Text style={{fontSize:20,color:'black'}}> {data.id}</Text> */}

        </View>
      </ScrollView>
      )
}

      export default SingleItem

      const styles = StyleSheet.create({ })