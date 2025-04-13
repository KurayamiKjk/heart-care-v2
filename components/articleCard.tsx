import { icons } from '@/constants/icons';
import { View, Text, Image, TouchableOpacity } from 'react-native';


interface ArticleProps {
    article: {
      id: number;
      title: string;
      date: string;
      readTime: string;
      image?: string | null;
    };
  }

const articleCard = ({article}: ArticleProps) => {
    return (
        <TouchableOpacity className="flex-row bg-white rounded-2xl shadow p-3 mb-3 mx-4">
          {article.image && (
            <Image source={{ uri: article.image }} className="w-14 h-14 rounded-md mr-3" />
          )}
          <View className="flex-1">
            <Text className="text-base font-semibold text-gray-800">{article.title}</Text>
            <Text className="text-xs text-gray-500 mt-1">{article.date} • {article.readTime}</Text>
          </View>
          <TouchableOpacity>
            <Image source={icons.bookmark} className="w-5 h-5 tint-gray-600" />
          </TouchableOpacity>
        </TouchableOpacity>
      );
}


export default articleCard