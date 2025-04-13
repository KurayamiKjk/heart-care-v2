import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import HealthInfo from '@/components/heartInfo'
import ProfileOption from '@/components/profileOption'
import { icons } from '@/constants/icons'

const profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Profile Image */}
      <View className="items-center mt-6">
        <Image source={{ uri: 'https://randomuser.me/api/portraits/women/50.jpg' }} className="w-24 h-24 rounded-full" />
        <Text className="text-lg font-semibold mt-2">Ruchita</Text>
      </View>

      {/* Health Stats */}
      <View className="flex-row justify-around mt-4 px-6">
        <HealthInfo icon={icons.heart} label="Heart Rate" value="215" unit="bpm" />
        <HealthInfo icon={icons.calo} label="Calories" value="756" unit="cal" />
        <HealthInfo icon={icons.weight} label="Weight" value="103" unit="lbs" />
      </View>

      {/* Profile Options */}
      <View className="mt-6 bg-white rounded-lg shadow">
        <ProfileOption icon={icons.info} label="My Information" onPress={() => {}} />
        <ProfileOption icon={icons.favorite} label="Favotite" onPress={() => {}} />
        <ProfileOption icon={icons.policy} label="Policy" onPress={() => {}} />
        <ProfileOption icon={icons.logout} label="Logout" onPress={() => {}} />
      </View>
    </SafeAreaView>
  )
}

export default profile