import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapLiveTrackingScreen = ({
  route
}) => {
  const {
    latitude,
    longitude
  } = route.params || {};
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Text style={styles.instructions}>
          Use two fingers to zoom in and out of the map. The marker shows the current location of the user.
        </Text>
        <MapView style={styles.map} initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}>
          <Marker coordinate={{
          latitude: latitude,
          longitude: longitude
        }} />
        </MapView>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  map: {
    height: 400,
    marginTop: 10
  },
  instructions: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  }
});
export default MapLiveTrackingScreen;