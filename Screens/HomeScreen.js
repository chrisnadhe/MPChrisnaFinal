import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {Appbar, Card, Text, Title, Paragraph, Image} from 'react-native-paper';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

import MapsScreen from './MapsScreen';
import FlagImage from '../Components/FlagImages';

const STATES_API_URL =
  'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [states, setStates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(STATES_API_URL);
      const data = response.data.data;
      setStates(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const renderItem = ({item}) => {
    // const imagePath = `../assets/flags/Flag_of_${item.State.replace(' ', '_')}.png`;
    const imageName = `${item.State.replace(/ /g, '_')}.png`;
    // console.log(imageName);
    const imagePath = FlagImage.GetImage(imageName);

    return (
      <TouchableOpacity onPress={() => navigateToStateMap(item.State)}>
        <Card style={styles.card}>
          <Card.Cover source={imagePath} />
          <Card.Content>
            <Title>{item.State}</Title>
            <Paragraph>
              <Text>Population: </Text>
              <Text>{item.Population.toLocaleString()} residents</Text>
            </Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  const navigateToStateMap = stateName => {
    navigation.navigate('MapsScreen', {selectedState: stateName});
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="US State Information" />
      </Appbar.Header>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={states}
          renderItem={renderItem}
          keyExtractor={item => item.State}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    marginBottom: 10,
  },
});

export default HomeScreen;
