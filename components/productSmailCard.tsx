import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
    image: string; 
    name: string; 
    quantity: string; 
    usersUsed: number; 
  }
  

const productSmailCard = ({image, name, quantity, usersUsed}:Props) => {
  return (
    <View className="w-40 p-3 border border-gray-200 rounded-lg bg-white">
      {/* Product Image */}
      <Image source={{ uri: image }} className="w-full h-20 object-contain" resizeMode="contain" />
      
      {/* Product Name */}
      <Text className="mt-2 text-lg font-semibold text-gray-900">{name}</Text>

      {/* Quantity */}
      <Text className="text-gray-500 text-sm">{quantity}</Text>

      {/* Number of users used */}
      <Text className="mt-2 text-sm text-gray-600">{usersUsed} people used</Text>

      {/* Add Button */}
      <TouchableOpacity className="mt-3 bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
        <Text className="text-white text-lg">+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default productSmailCard