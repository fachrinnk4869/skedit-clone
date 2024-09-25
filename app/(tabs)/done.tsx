import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { styled } from 'nativewind';
import { MaterialIcons } from '@expo/vector-icons'; // or whichever icon library you're using


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
];

const Card = ({ title, description, image }) => (
<CardContainer className="flex flex-col border-2"  style={{ width: '100%' }}>
<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <MaterialIcons name="info"  size={18} style={{ marginRight: 8 }} />
      <Text style={{ flex: 1, fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
        {title}
      </Text>
      <MaterialIcons  name="more-vert" size={18} />
    </View>
    <View className="flex justify-end">
        <MaterialIcons name="link" size={18} className="mb-2" /> 
    </View>
</CardContainer>
);

export default function Done() {
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
