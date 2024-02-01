import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {Appbar, Card, Text, Title, Paragraph, Image} from 'react-native-paper';
import axios from 'axios';
import {navigation} from '@react-navigation/native';

// import NavigateToStateMap from './Screens/NavigateToStateMap';

const STATES_API_URL =
  'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest';

const HomeScreen = () => {
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

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => navigateToStateMap(item.State)}>
      <Card style={styles.card}>
        <Card.Cover
          source={{uri: `https://placeholder.com/300/${item.State}.png`}}
        />
        <Card.Content>
          <Title>{item.State}</Title>
          <Paragraph>
            {/* Ensure text is within Text components */}
            <Text>Population: </Text>
            <Text>{item.Population.toLocaleString()} residents</Text>
          </Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
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
