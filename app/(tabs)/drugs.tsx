import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import ProductSmailCard from '@/components/productSmailCard'; // Import item card component
import { useRouter } from 'expo-router';
import Header from '@/components/header';
import ProductCardRow from '@/components/productCardRow';

const medicines = [
  { id: 1, image: 'https://via.placeholder.com/100', name: 'Panadol', quantity: '20pcs', usersUsed: 1500 },
  { id: 2, image: 'https://via.placeholder.com/100', name: 'Bodrex Herbal', quantity: '100ml', usersUsed: 1200 },
  { id: 3, image: 'https://via.placeholder.com/100', name: 'Konidin', quantity: '3pcs', usersUsed: 800 },
];

const recommendedMedicines = [
  { id: 4, image: 'https://via.placeholder.com/100', name: 'Vitamin C', quantity: '500mg', usersUsed: 2200 },
  { id: 5, image: 'https://via.placeholder.com/100', name: 'Omega-3', quantity: '1000mg', usersUsed: 1800 },
];

const drugs = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white p-4">
      <Header title='Medicines'/>

      {/* Scrollable Content */}
      <ScrollView className="p-4" showsVerticalScrollIndicator={false}>
        {/* Order Quickly Section */}
        <View className="bg-blue-100 p-4 rounded-lg flex-row justify-between items-center">
          <View>
            <Text className="text-lg font-semibold text-gray-900">Order quickly with Prescription</Text>
            <TouchableOpacity className="mt-2 bg-blue-500 px-4 py-2 rounded-md">
              <Text className="text-white font-semibold">Upload Prescription</Text>
            </TouchableOpacity>
          </View>
          <Image source={{ uri: 'https://via.placeholder.com/80' }} className="w-20 h-20" />
        </View>

        {/* Popular Medicines */}
        <ProductCardRow title="Popular Medicines" data={medicines} />

        {/* Recommended for Your Health */}
        <ProductCardRow title="Recommended for Your Health" data={recommendedMedicines} />
      </ScrollView>
    </View>
)}

export default drugs