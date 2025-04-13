import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { icons } from '@/constants/icons';
import SearchBar from '@/components/searchBar';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import ArticleCard from '@/components/articleCard';
import CategoryCircle from '@/components/categoryCircle';

// Danh sách dịch vụ
const categories = [
  { id: 1, icon: icons.logo, label: 'Top Doctors', route: './doctors' },
  { id: 2, icon: icons.logo, label: 'Pharmacy', route: './pharmacy' },
  { id: 3, icon: icons.logo, label: 'Ambulance', route: './ambulance' },
];

// Danh sách bài viết
const articles = [
  {
    id: 1,
    title: 'The 25 Healthiest Fruits You Can Eat, According to a Nutritionist',
    date: 'Jun 10, 2023',
    readTime: '5min read',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'The Impact of COVID-19 on Healthcare Systems',
    date: 'Jul 10, 2023',
    readTime: '5min read',
    image: null,
  },
];

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ArticleCard article={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            {/* Phần xanh (Header) */}
            <View className="bg-blue-500 p-5 pb-24 rounded-b-3xl">
              <View className="flex-row justify-between items-center mt-5">
                <View>
                  <Text className="text-lg font-semibold text-white">Welcome !</Text>
                  <Text className="text-xl font-bold text-white">Ruchita</Text>
                  <Text className="text-sm text-blue-200">How is it going today?</Text>
                </View>
                <Image
                  source={{ uri: 'https://via.placeholder.com/100' }}
                  className="w-20 h-20 rounded-full"
                />
              </View>
            </View>

            {/* Phần trắng (Nội dung) */}
            <View className="bg-white -mt-16 p-5 rounded-t-3xl">
              {/* Thanh tìm kiếm */}
              <SearchBar
                onPress={() => router.push('./search')}
                showKeyboard={false}
                placeholder="Search doctor, drugs, articles..."
              />

              {/* Danh sách dịch vụ */}
              <View className="flex-row justify-between mt-5 px-2">
                {categories.map((item) => (
                  <CategoryCircle key={item.id} icon={item.icon} label={item.label} route={item.route}  />
                ))}
              </View>

              {/* Header danh sách bài viết */}
              <View className="mt-6 px-2">
                <View className="flex-row justify-between items-center">
                  <Text className="font-semibold text-lg text-gray-900">Health article</Text>
                  <TouchableOpacity onPress={() => router.push('./articles')}>
                    <Text className="text-blue-500 text-sm">See all</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        )}
        contentContainerStyle={{ paddingBottom: 20 }} // Tránh cắt nội dung cuối
      />
    </SafeAreaView>
  );
};

export default Home;
