import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants/icons';

interface Props {
  title: string;
  value: string;
  placeholder?: string;
  placeholderTextColor?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  [key: string]: any;
}

const FormField = ({ title, value, placeholder, placeholderTextColor, handleChangeText, otherStyles, ...props }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-black font-semibold">{title}</Text>

      <View
        className={`w-full h-16 px-4 bg-gray-400 border-2 rounded-lg flex-row items-center ${
          isFocused ? 'border-orange-300' : 'border-black'
        }`}
      >
        {title === 'Email' && <Image source={icons.email} className="w-6 h-6" resizeMode="contain" />}
        {title === 'Password' && <Image source={icons.lock} className="w-6 h-6" resizeMode="contain" />}
        {title === 'Confirm Password' && <Image source={icons.lockclock} className="w-6 h-6" resizeMode="contain" />}
        {title === 'Your Name' && <Image source={icons.person} className="w-6 h-6" resizeMode="contain" />}

        <TextInput
          className="flex-1 text-black font-semibold text-base"
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={(title === 'Password' && !showPassword) || (title === 'Confirm Password' && !showConfirmPassword)} // ✅ Đã sửa
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={showPassword ? icons.eyehide : icons.eye} className="w-6 h-6" resizeMode="contain" />
          </TouchableOpacity>
        )}

        {title === 'Confirm Password' && (
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Image source={showConfirmPassword ? icons.eyehide : icons.eye} className="w-6 h-6" resizeMode="contain" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
