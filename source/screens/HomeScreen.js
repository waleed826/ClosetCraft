import { Button, FlatList, Image, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ApiCall } from '../WebHandler/WebHandler'
import Urls from '../WebHandler/Urls'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import theme from '../utils/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = ({ route, navigation, }) => {
  
  const { id, name } = route.params;
const [uid,setId] = useState(id)
 const setuId = async()=> {
  const id = JSON.stringify(uid)
  await AsyncStorage.setItem('@loginId',id)
 }
 
  const [data, setData] = useState([])
  const [items, setItems] = useState([])
  const [category, setCategory] = useState({})
  useEffect(() => {
setuId()
    getData('electronics');
    apiFetchOneItem()
    apiFetchCategories()
  }, [])

 
  const apiFetchOneItem = () => {

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setData(json))

  }

  const getData = async (item) => {
    try {
      const response = await ApiCall({
        URL: Urls.CATAGORIES + item,
        verb: 'GET'
      })
      if (response) {
        setItems(response)
      }
      else {
        console.log("🚀 ~ file: HomeScreen.js:44 ~ getData ~ Error response:", response)

      }
    } catch (error) {
      console.log("🚀 ~ file: HomeScreen.js:51 ~ getData ~ error:", error)

    }
  }
  const apiFetchCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => {
        return (setCategory(json),
          console.log("🚀 ~ file: HomeScreen.js:38 ~ apiFetchCategories ~ json:", category)
        )
      })
  }
  return (
    <View style={{ padding: 10, flex: 1, backgroundColor: 'rgba(151, 117, 250, 0.2)' }} >
   
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, padding: 10 }}>
        <Text style={{ fontFamily: theme.fonts.bold, fontSize: 20 }}> Hey {name}..!</Text>
        <FontAwesome5 name='user-circle' size={30} onPress={() => navigation.navigate('usp')} style={{}} />
      </View>
      <View style={{ alignItems: 'center', }}>
        <Image source={{ uri: data.image }} style={{ height: 200, width: 200, }} resizeMode='contain' />
        <Text style={{ textAlign: 'center', color: 'black', fontFamily: theme.fonts.regular }}>{data.title}</Text>
        <Text style={{ textAlign: 'center', color: 'black', fontFamily: theme.fonts.regular }}>{data.price} $</Text>
      </View>
      <View>
      <Text style={{ color: 'black', fontFamily: theme.fonts.regular }}>Choose Category</Text>
        <FlatList
          data={category}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity key={index.item} onPress={() => { getData(item) }} style={{ margin: 10, padding: 10, borderRadius: 10, backgroundColor: 'rgba(245, 246, 250, 0.6)', color: 'black' }}>
                <Text style={{fontFamily:theme.fonts.semiBold}}>{item}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
      <FlatList
        data={items}
        numColumns={2}
        // ItemSeparatorComponent={}
        // refreshControl={<RefreshControl refreshing={loading} onRefresh={getData}/>}
        renderItem={({ item, index }) => {
          return (
            <View style={{}}>
              <TouchableOpacity style={{marginHorizontal:5,marginVertical:7,padding:5, borderRadius:15, backgroundColor: 'rgba(151, 117, 250, 0.4)',}} onPress={() => navigation.navigate('sni', {
                id: item
              })}>
                <Image source={{ uri: item.image }} style={{ height: 150, width: 150 }} resizeMode='contain' />
                <Text style={styles.categorytxt}>Price: {item.price} $</Text>
                <Text style={styles.categorytxt}>Raing: {item.rating.rate}</Text>
                <Text style={styles.categorytxt}>Rated by: {item.rating.count}</Text>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  categorytxt: {
    textAlign: 'center', 
    color: 'black',
    fontFamily:theme.fonts.regular
  }
})