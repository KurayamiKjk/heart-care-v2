import { View, Image, Pressable, Modal, Text } from "react-native";
import React, { useState } from "react";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { icons } from "@/constants/icons";

const ChatAIBubble = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = (event: any) => {
    translateX.value = event.translationX;
    translateY.value = event.translationY;
  };

  const onGestureEnd = () => {
    translateX.value = withSpring(0); 
    translateY.value = withSpring(0); 
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
  }));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler onGestureEvent={onGestureEvent} onEnded={onGestureEnd}>
        <Animated.View
          style={[
            { 
              width: 60, 
              height: 60, 
              backgroundColor: '#0d6efd', 
              borderRadius: 30, 
              justifyContent: 'center', 
              alignItems: 'center', 
              position: 'absolute', 
              bottom: 20, 
              right: 20, 
              zIndex: 999
            },
            animatedStyle
          ]}
        >
          <Pressable
            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => setIsChatOpen(true)}
          >
            <Image source={icons.chatbot} style={{ width: 40, height: 40 }} tintColor="white" />
          </Pressable>
        </Animated.View>
      </PanGestureHandler>

      <Modal visible={isChatOpen} transparent animationType="slide">
        <View className="flex-1 bg-white p-4">
          <Pressable onPress={() => setIsChatOpen(false)} className="absolute top-4 right-4">
            <Text className="text-lg text-blue-500">Đóng</Text>
          </Pressable>
          <Text className="text-lg font-bold">Chat với AI</Text>
        </View>
      </Modal>
    </GestureHandlerRootView>
  );
};

export default ChatAIBubble;
