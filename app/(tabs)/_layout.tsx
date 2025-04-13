import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import ChatBoxModal from '@/components/ChatBoxModal';

const TabIcon = ({ focused, icon, tittle }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex w-full flex-1 min-w-[75px] min-h-14 mt-3 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#fff" className="size-5" />
        <Text className="text-white text-base font-semibold ml-1">{tittle}</Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} style={{ tintColor: "#A8B5DB", width: 20, height: 20 }} />
    </View>
  );
};

const _layout = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <>      
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarItemStyle: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarStyle: {
            position: 'absolute',
            overflow: 'hidden',
            marginBottom: 10,
            marginHorizontal: 10,
            borderRadius: 50,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.home} tittle="Home" />
            ),
          }}
        />
        <Tabs.Screen
          name="drugs"
          options={{
            headerShown: false,
            title: 'Drug',
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.pill} tittle="Drug" />
            ),
            tabBarItemStyle: { marginRight: 35 }
          }}
        />
        <Tabs.Screen
          name="notification"
          options={{
            headerShown: false,
            title: 'Notification',
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.notification} tittle="Notification" />
            ),
            href: null,
          }}
        />
        <Tabs.Screen
          name="stepcount"
          options={{
            headerShown: false,
            title: 'Progress',
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.monitoring} tittle="Progress" />
            ),
            tabBarItemStyle: { marginLeft: 35 }
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: 'Profile',
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.person} tittle="Profile" />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            headerShown: false,
            title: 'Search',
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.search} tittle="Search" />
            ),
            href: null,
          }}
        />
      </Tabs>
      <TouchableOpacity onPress={() => setModalVisible(true)}
       className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#6C4BF4] w-16 h-16 rounded-full justify-center items-center shadow-lg z-10">
        <Image source={icons.chatbot} className="w-7 h-7 tint-white" />
      </TouchableOpacity>

      <ChatBoxModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </>
  );
};

export default _layout;
