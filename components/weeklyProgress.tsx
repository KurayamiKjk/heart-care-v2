import { View, Text } from 'react-native';
import React, { useState } from 'react';
import RingProgress from '@/components/ringprogress';

interface WeeklyProgressProps {
    data: number[]; 
    selectedDayIndex: number;
}



const weeklyProgress = ({data, selectedDayIndex}:WeeklyProgressProps) => {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return (
        <View className="items-center">
          <View className="flex-row justify-center gap-3 mb-4">
            {data.map((percent, index) => {
              if (index === selectedDayIndex) return null;
              return (
                <View key={index} className="items-center">
                  <RingProgress radius={25} strokeWidth={6} progress={percent} />
                  <Text className="text-xs mt-1">{daysOfWeek[index]}</Text>
                </View>
              );
            })}
          </View>

          <RingProgress radius={80} strokeWidth={25} progress={data[selectedDayIndex]} />
          <Text className="mt-2 font-semibold">{daysOfWeek[selectedDayIndex]}</Text>
        </View>
      );
}

export default weeklyProgress