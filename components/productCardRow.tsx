import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import ProductSmailCard from '@/components/productSmailCard';


interface ProductCardRowProps {
    title: string;
    data: { id: number; image?: string; name: string; quantity?: string; usersUsed?: number }[];
  }

const productCardRow = ({ title, data }:ProductCardRowProps) => {
  return (
    <View className="mt-5">
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-lg font-semibold text-gray-900">{title}</Text>
        <TouchableOpacity>
          <Text className="text-blue-500 text-sm">See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <ProductSmailCard 
            key={item.id} 
            image={item.image ?? ''} 
            name={item.name} 
            quantity={item.quantity ?? ''} 
            usersUsed={item.usersUsed ?? 0} 
          />
        ))}
      </ScrollView>
    </View>
)}

export default productCardRow