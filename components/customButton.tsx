import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface Props {
  title: string
  handlePress: () => void
  containerStyles?: string
  textStyles?: string
    isLoading?: boolean
  }

const customButton = ({title, handlePress, containerStyles, textStyles, isLoading}: Props) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.8}
      className={`bg-cyan-500 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`} disabled={isLoading}
    >
      <Text className={`text-white font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default customButton

const styles = StyleSheet.create({})