import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import trips from "@/data/trips";
import { useLocalSearchParams } from "expo-router";

const TripDetails = () => {
  const { TripDetails } = useLocalSearchParams();
  const trip = trips.find((TID) => `${TID.id}` === TripDetails);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{trip?.name}</Text>
      <Image source={{ uri: trip?.img }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.description}>City: {trip?.city}</Text>
        <Text style={styles.description}>Length: {trip?.length1}KM</Text>
        <Text style={styles.description}>Difficulty: {trip?.difficulty}</Text>
        <Text style={styles.description}>Rating: {trip?.rating}</Text>
      </View>

      <Text style={styles.description}>{trip?.details}</Text>
    </View>
  );
};

export default TripDetails;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  infoContainer: {
    marginBottom: 10,
  },
});
