import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Header from '@/components/header'
import SearchBar from '@/components/searchBar'

const search = () => {
  return (
    <View className='flex-1'>
      <Header title='Search'/>
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} 
            contentContainerStyle= {{minHeight: "100%", paddingBottom: 10}}>
              <View className='flex-1 mt-5'>
                  <SearchBar
                      placeholder="Search doctors, clinics, hospitals..."
                      showKeyboard={true}
                  />
              </View>
            </ScrollView>
    </View>
  )
}

export default search