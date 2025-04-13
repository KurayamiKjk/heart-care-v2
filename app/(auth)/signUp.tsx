import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Formfield from '@/components/formfield'
import CustomButton from '@/components/customButton'
import { Link } from 'expo-router'

const signUp = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        userName: ''

      })
      const [isSubmitting, setIsSubmitting] = useState(false)
    
      const submit = () => {
        console.log(form)
      }
      return (
        <SafeAreaView className='h-full'>
          <ScrollView>
            <View className='w-full justify-center h-full px-4 my-6'>
              <Text className='text-4xl font-semibold text-center w-full'>
                Hello, welcome 👋
              </Text>
              <Formfield 
              title='Your Name'
              value={form.userName}
              handleChangeText={(e: string) => setForm({...form, userName: e})}
              otherStyles='mt-5'
              placeholder='Enter your name'
              placeholderTextColor='white'
               />
              <Formfield 
              title='Email'
              value={form.email}
              handleChangeText={(e: string) => setForm({...form, email: e})}
              otherStyles='mt-5'
              keyboardType='email-address'
              placeholder='Enter your email'
              placeholderTextColor='white'
               />
              <Formfield 
              title='Password'
              value={form.password}
              handleChangeText={(e: string) => setForm({...form, password: e})}
              otherStyles='mt-5'
              placeholder='Enter your password'
              placeholderTextColor='white'
               />
              <Formfield 
              title='Confirm Password'
              value={form.confirmPassword}
              handleChangeText={(e: string) => setForm({...form, confirmPassword: e})}
              otherStyles='mt-5'
              placeholder='Confirm your password'
              placeholderTextColor='white'
               />
              <CustomButton
                  title="Sign Up"
                  handlePress={(submit)}
                  containerStyles="w-full mt-6"
                  isLoading={isSubmitting}
              />
              <View className='justify-center pt-5 flex-row gap-2'>
                <Text className='text-center '>
                  Already have an account ? {' '}
                </Text>
                <Link href='/signIn' className='text-blue-500 font-semibold'>
                    Login Now!
                </Link>
              </View>
              
            </View>
          </ScrollView>
    
        </SafeAreaView>                                         
      )
}

export default signUp