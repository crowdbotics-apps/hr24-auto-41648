import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { View, Dimensions, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome5";

const Maps = ({
  apiKey,
  markedLocations,
  onMarkerPress
}) => {
  const [mapRef, setMapRef] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const {
    width,
    height
  } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  useEffect(() => {
    if (mapRef && markedLocations.length > 0) {
      mapRef.fitToCoordinates(markedLocations, {
        edgePadding: {
          right: width / 20,
          bottom: height / 20,
          left: width / 20,
          top: height / 20
        }
      });
    }
  }, [mapRef, markedLocations]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setCurrentLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    }, error => console.log(error), {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000
    });
  }, []);
  return <View style={_styles.TpkpRXDC}>
      <MapView initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }} ref={setMapRef} style={_styles.KvduvAXi} showsUserLocation={true} followsUserLocation={true}>
        {currentLocation && <Marker coordinate={{
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude
      }} title={"You are here"} />}
        {markedLocations.map((item, index) => <Marker key={index} coordinate={{
        latitude: item.latitude,
        longitude: item.longitude
      }} onPress={() => onMarkerPress(item)}>
            <View style={_styles.CgYosqHa}>
              <Image source={{
            uri: item.image
          }} style={_styles.TEDckhtK} />
              <View style={_styles.yJdLQfyq}>
                <Icon name="dollar-sign" size={15} color="#000" />
                <Text style={_styles.cosBcHDc}>{item.price}</Text>
              </View>
            </View>
          </Marker>)}
      </MapView>
    </View>;
};

Maps.propTypes = {
  apiKey: PropTypes.string.isRequired,
  markedLocations: PropTypes.array.isRequired,
  onMarkerPress: PropTypes.func.isRequired
};
export default Maps;

const _styles = StyleSheet.create({
  TpkpRXDC: {
    flex: 1
  },
  KvduvAXi: {
    flex: 1
  },
  CgYosqHa: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 1
  },
  TEDckhtK: {
    width: 50,
    height: 50
  },
  yJdLQfyq: {
    flexDirection: "row",
    alignItems: "center"
  },
  cosBcHDc: {
    marginLeft: 5
  }
});