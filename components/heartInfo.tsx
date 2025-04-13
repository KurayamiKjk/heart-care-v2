import { View, Text, Image } from 'react-native';

interface Props {
  icon: any;
  label: string;
  value: string;
  unit: string;
}

const HealthInfo = ({ icon, label, value, unit }: Props) => (
  <View className="items-center">
    <Image source={icon} className="w-6 h-6 mb-1" tintColor="blue" />
    <Text className="text-gray-500 text-xs">{label}</Text>
    <Text className="text-blue-500 font-bold">{value}{unit}</Text>
  </View>
);

export default HealthInfo;
