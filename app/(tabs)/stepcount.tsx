import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ValueField from '@/components/valuefield'
import Ringprogress from '@/components/ringprogress'
import AppleHealthKit, { HealthKitPermissions } from 'react-native-health'
import { icons } from '@/constants/icons'
import Header from '@/components/header'
import WeeklyProgress from '@/components/weeklyProgress'

const permissions: HealthKitPermissions = {
  permissions: {
    read: [],
    write: []
  }
}

const progressData = [50, 75, 30, 90, 60, 40, 80];
const selectedDay = 0;

const StepCount = () => {
  useEffect(() => {
    AppleHealthKit.initHealthKit
  }, [])

  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-4">
        <Header title='Progress'/>
      {/* Heart Rate Section */}
      <View className="flex flex-row justify-between gap-4">
        <View className="bg-white p-5 rounded-2xl flex-1 shadow-lg">
          <Image source={icons.heart} className="w-12 h-12 mb-2" resizeMode="contain" tintColor="red" />
          <Text className="text-lg font-bold text-gray-700">Heart Rate</Text>
          <View className="flex-row items-end">
            <Text className="text-5xl font-extrabold text-red-500">97</Text>
            <Text className="text-base font-semibold text-gray-600 ml-2">bpm</Text>
          </View>
        </View>
      </View>

      {/* Calories Burned & Weight Section */}
      <View className="flex flex-row justify-between gap-4 mt-4">
        <View className="bg-white p-5 rounded-2xl flex-1 shadow-md">
          <Text className="text-lg font-bold text-gray-700">Calories Burned</Text>
          <Text className="text-3xl font-extrabold text-orange-500">200 kcal</Text>
        </View>
        <View className="bg-white p-5 rounded-2xl flex-1 shadow-md">
          <Text className="text-lg font-bold text-gray-700">Weight</Text>
          <Text className="text-3xl font-extrabold text-blue-500">103 lbs</Text>
        </View>
      </View>

      
      {/* Progress Ring */}
      <View className="justify-center items-center w-full mt-6">
        <WeeklyProgress data={progressData} selectedDayIndex={selectedDay} />
        {/* <Ringprogress radius={110} progress={50} /> */}
      </View>

      {/* Steps & Distance */}
      <View className="flex flex-row justify-between gap-4 ">
        <ValueField title="Steps" value="1232" />
        <ValueField title="Distance" value="11 km" />
      </View>

    </SafeAreaView>
  )
}

export default StepCount
