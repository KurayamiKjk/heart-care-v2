import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

interface Props {
  title: string;
}

const header = ({title}:Props) => {
  const router = useRouter();

  return (
    <View className="flex-row items-center mb-4">
      <TouchableOpacity onPress={() => router.back()}>
        <Text className="text-lg text-blue-500">{'<'}</Text>
      </TouchableOpacity>
      <Text className="ml-4 text-xl font-bold text-gray-900">{title}</Text>
    </View>
  );
};

export default header