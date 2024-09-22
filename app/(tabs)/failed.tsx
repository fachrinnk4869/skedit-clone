import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { styled } from 'nativewind';

// Define a styled version of View and Text using nativewind
const CardContainer = styled(View);
const CardText = styled(Text);
const CardButton = styled(TouchableOpacity);

const initialData = [
  {
    id: '1',
    title: 'Card 10a',
    description: 'This is the description for card 1',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    title: 'Card 2',
    description: 'This is the description for card 2',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    title: 'Card 3',
    description: 'This is the description for card 3',
    image: 'https://via.placeholder.com/150',
  },
];

const Card = ({ title, description, image }) => (
  <CardContainer className="bg-white rounded-lg mb-4 mx-4 overflow-hidden shadow-lg">
    <Image source={{ uri: image }} className="w-full h-40" />
    <View className="p-4">
      <CardText className="text-lg font-bold mb-2">{title}</CardText>
      <CardText className="text-gray-600 mb-4">{description}</CardText>
      <CardButton className="bg-blue-500 py-2 rounded-lg items-center">
        <CardText className="text-white font-bold">Learn More</CardText>
      </CardButton>
    </View>
  </CardContainer>
);

export default function Failed() {
  const [data, setData] = useState(initialData);

  const addNewCard = () => {
    const newId = (data.length + 1).toString();
    const newCard = {
      id: newId,
      title: `Card ${newId}`,
      description: `This is the description for card ${newId}`,
      image: 'https://via.placeholder.com/150',
    };
    setData([...data, newCard]);
  };

  return (
    <View className="flex-1 pt-10 bg-gray-100">
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Floating Add Button */}
      <TouchableOpacity
        onPress={addNewCard}
        className="absolute bottom-8 right-8 bg-blue-500 w-16 h-16 rounded-full items-center justify-center shadow-lg"
      >
        <Text className="text-white text-3xl font-bold">+</Text>
      </TouchableOpacity>
    </View>
  );
}
