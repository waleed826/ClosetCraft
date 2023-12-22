import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import theme from '../utils/styles'

const CartScreen = () => {
    const [cartItem, setCartItem] = useState([])
    useEffect(() => {
        apiFetchCart()
    }, [])
    const apiFetchCart = () => {
        fetch('https://fakestoreapi.com/carts')
            .then(res=>res.json())
            // .then(json=>console.log(json))
            .then(json=>setCartItem(json))
    }
    return (
        <View>
            <Text style={{fontFamily:theme.fonts.regular,fontSize:20,color:'black'}}>Items YOu Have Added</Text>
            <FlatList
            data={cartItem}
            renderItem={({item,index})=>{
                return(
                    <View>
                        <Text style={{fontFamily:theme.fonts.regular,fontSize:10,color:'black'}}>
                            {item.id}
                        </Text>
                        <Text style={{fontFamily:theme.fonts.regular,fontSize:10,color:'black'}}>
                            {item.date}
                        </Text>
                    </View>
                )
            }}
            />
            {/* <Text >{cartItem?.date}</Text> */}
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({})