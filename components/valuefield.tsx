import { View, Text } from 'react-native'
import React from 'react'

interface Props {
  title: string;
  value: string;
  titleStyle?: string;
  valueStyle?: string;
}


const valuefield = ({ title, value, titleStyle, valueStyle }: Props) => {
    return (
      <View className='me-4'>
        <Text className={`text-base font-bold text-gray-800 mb-2 ${titleStyle}`}>
          {title}
        </Text>
        <Text className={`text-2xl font-bold text-red-500 text-center mt-2${valueStyle}`}>
          {value}
        </Text>
      </View>
    );
  };
  

export default valuefield