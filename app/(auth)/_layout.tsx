import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const _layout = () => {
  return (
    <>
        <Stack>
            <Stack.Screen name="signIn" 
            options={{headerShown: false}} 
            />
            <Stack.Screen name="signUp" 
            options={{headerShown: false}} 
            />
        </Stack>
        <StatusBar backgroundColor={'#fff'} style="light"/>
        
    </>
  )
}

export default _layout