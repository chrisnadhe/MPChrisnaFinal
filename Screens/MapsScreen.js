import React, {useState, useEffect} from 'react';
import {Alert, View, Text, StyleSheet, Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Config from 'react-native-config';

const apiKey = Config.REACT_APP_GOOGLE_MAPS_API_KEY;

function MapsScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRegion, setInitialRegion] = useState({
    latitude: -6.17511,
    longitude: 106.82725,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <Text style={styles.loadingText}>Loading map...</Text>
      ) : (
        <MapView
          provider={PROVIDER_GOOGLE}
          apiKey={apiKey}
          style={styles.map}
          initialRegion={initialRegion}
        />
      )}
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
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MapsScreen;
