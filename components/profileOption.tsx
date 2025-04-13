import { icons } from '@/constants/icons';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface Props {
  icon: any;
  label: string;
  onPress: () => void;
}

const ProfileOption = ({ icon, label, onPress }: Props) => (
  <TouchableOpacity onPress={onPress} className="flex-row items-center py-4 px-5 border-b border-gray-200">
    <Image source={icon} className="w-6 h-6 mr-3" tintColor="blue" />
    <Text className="text-gray-700 text-lg flex-1">{label}</Text>
    <Image source={icons.right} className="w-4 h-4" tintColor="gray" />
  </TouchableOpacity>
);

export default ProfileOption;
