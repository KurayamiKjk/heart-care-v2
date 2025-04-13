import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props {
  placeholder: string
  onPress?: () => void
  showKeyboard?: boolean
}

const searchBar = ({placeholder, onPress, showKeyboard}: Props) => {
  return (
    <View className='flex-row items-center bg-gray-300 rounded-full px-5 py-2'>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='#ab8bff'/>
      <TextInput 
        placeholder={placeholder}
        onPress={onPress} 
        value='' 
        showSoftInputOnFocus={showKeyboard}
        onChangeText={()=>{}}
        placeholderTextColor='#ab8b5db'
        className='flex-1 ml-2'
      />
    </View>
  )
}

export default searchBar

