import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";

const MovieItem = ({ item, navigation }) => (
  <TouchableOpacity onPress={() => navigation.push("Movie Title", { item })}>
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <AntDesign name="right" size={24} color="black" />
    </View>
  </TouchableOpacity>
);

export const MovieResults = ({ navigation }) => {
  const [moviesObject, setMoviesObject] = useState({});

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
