import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";

// MovieItem to render for each result
const MovieItem = ({ item, navigation }) => (
  // We pass the individual movie details as a prop to the MovieDetails component
  <TouchableOpacity onPress={() => navigation.push("Movie Title", { item })}>
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <AntDesign name="right" size={24} color="black" />
    </View>
  </TouchableOpacity>
);

export const MovieResults = ({ navigation }) => {
  const [moviesObject, setMoviesObject] = useState({});

  // Get the full api/films/ resource when the screen loads, this happens only once
  useEffect(() => {
    const getMoviesFromApi = async () => {
      try {
        let response = await fetch("https://swapi.dev/api/films/");
        let json = await response.json();
        setMoviesObject(json);
      } catch (error) {
        console.error(error);
      }
    };
    getMoviesFromApi();
  }, []);

  // Render an item for each movie
  const renderItem = ({ item }) => (
    <MovieItem item={item} navigation={navigation} />
  );
  return (
    <FlatList
      data={moviesObject.results}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  );
};
