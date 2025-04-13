import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ChatBoxModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, input]);
    setInput('');
  };

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View className="flex-1 bg-black/40 justify-center items-center">
        <View className="w-[90%] h-[80%] bg-white rounded-2xl p-4">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-lg font-semibold">Chat</Text>
            <TouchableOpacity onPress={onClose}>
              <Text className="text-red-500 font-semibold">Close</Text>
            </TouchableOpacity>
          </View>

          {/* Messages */}
          <ScrollView className="flex-1 bg-gray-100 rounded-xl p-2 mb-2">
            {messages.map((msg, index) => (
              <View
                key={index}
                className="bg-blue-500 self-end px-3 py-2 my-1 rounded-lg max-w-[80%]"
              >
                <Text className="text-white">{msg}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Input */}
          <View className="flex-row items-center">
            <TextInput
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 mr-2"
              value={input}
              placeholder="Nhập tin nhắn..."
              onChangeText={setInput}
              onSubmitEditing={sendMessage}
            />
            <TouchableOpacity
              onPress={sendMessage}
              className="bg-blue-600 px-4 py-2 rounded-full"
            >
              <Text className="text-white font-semibold">Gửi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ChatBoxModal;
