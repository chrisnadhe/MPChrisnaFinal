import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Config from 'react-native-config';

const apiKey = Config.REACT_APP_GOOGLE_MAPS_API_KEY;
const GeoApiKey = Config.REACT_APP_GEOAPIFY_API_KEY;

function MapsScreen({route}) {
  // console.log('MapsScreen', route);
  const {selectedState = 'New York'} = route?.params ?? {};

  // console.log('selectedState', selectedState);

  const [isLoading, setIsLoading] = useState(true);

  const [region, setRegion] = useState({
    latitude: -6.17511,
    longitude: 106.82725,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${selectedState}&apiKey=${GeoApiKey}`,
    )
      .then(response => response.json())
      .then(stateData => {
        const {lat = 33.2588817, lon = -86.8295337} =
          stateData.features[0].properties;
        setRegion({
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      })
      .finally(() => setIsLoading(false));
  }, [selectedState]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        apiKey={apiKey}
        style={styles.map}
        region={region}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapsScreen;
