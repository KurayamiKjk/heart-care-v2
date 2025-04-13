import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

interface CategoryCircleProps {
  icon: any;
  label: string;
  route?: string;
}

const CategoryCircle = ({ icon, label, route }:CategoryCircleProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push(route)}  className="items-center mx-3">
      <View className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
        <Image source={icon} className="w-8 h-8 tint-white" />
      </View>
      <Text className="mt-2 text-sm text-gray-800">{label}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCircle;
