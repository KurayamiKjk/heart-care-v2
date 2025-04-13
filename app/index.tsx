import { View, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants/images'
import CustomButton from '@/components/customButton'
import { router } from 'expo-router'
import 'react-native-gesture-handler';

const index = () => {
  return (
    <SafeAreaView className='h-full'>
        <ScrollView contentContainerStyle={{height: '100%'}}>
            <View className='w-full min-h-[85vh] px-4 justify-center items-center'>
                <Image
                    source={images.splashScreen}
                    className='w-[100%] h-[100vh]'
                    resizeMode='contain'
                    />
                <View className='w-full h-full absolute '>
                    <CustomButton
                        title='Get Started'
                        handlePress={() => {router.push('/signUp')}}
                        containerStyles='w-full mt-[80vh]'
                        />
                    <CustomButton
                        title='Click here to home page !'
                        handlePress={() => {router.push('/home')}}
                        containerStyles='w-full mt-4'
                        />

                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default index