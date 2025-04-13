import { Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Formfield from '../../components/formfield'
import { useState } from 'react'
import CustomButton from '@/components/customButton'
import { Link } from 'expo-router'

const signIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
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
            Sign In
          </Text>
          <Formfield 
          title='Email'
          value={form.email}
          handleChangeText={(e: string) => setForm({...form, email: e})}
          otherStyles='mt-5'
          keyboardType='email-address'
           />
          <Formfield 
          title='Password'
          value={form.password}
          handleChangeText={(e: string) => setForm({...form, password: e})}
          otherStyles='mt-5'
           />
          <CustomButton
              title="Sign In"
              handlePress={(submit)}
              containerStyles="w-full mt-6"
              isLoading={isSubmitting}
          />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-center '>
              Don't have an account? {' '}
            </Text>
            <Link href='/signUp' className='text-blue-500 font-semibold'>
                Sign Up Now!
            </Link>
          </View>
          
        </View>
      </ScrollView>

    </SafeAreaView>                                         
  )
}

export default signIn



