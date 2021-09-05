import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";

const Item = ({ name }) => (
  <View style={styles.movie_info_characters}>
    <Text style={styles.movie_info_text}>{name}</Text>
  </View>
);
export const MovieDetails = ({ route, navigation }) => {
  const { item } = route.params;

  const [characterArray, setCharacterArray] = useState([]);

  // Get the list of character names, this happens only once
  useEffect(() => {
    const getCharactersFromApi = async () => {
      try {
        // map was faster than for loop
        // Looked up from https://dev.to/askrishnapravin/for-loop-vs-map-for-making-multiple-api-calls-3lhd
        await Promise.all(
          item.characters.map(async (url) => {
            let response = await fetch(url);
            let json = await response.json();
            // "Append" the result to an array
            setCharacterArray((characterArray) => [
              ...characterArray,
              { name: json.name },
            ]);
          })
        );
      } catch (error) {
        console.error(error);
      }
    };
    getCharactersFromApi();
  }, []);

  const renderItem = ({ item }) => <Item name={item.name} />;
  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.movie_info}>
              <Text style={styles.movie_info_text}>
                Release Date: {item.release_date}
              </Text>
              <Text style={styles.movie_info_text}>
                Director: {item.director}
              </Text>
              <Text style={styles.movie_info_text}>
                Producer: {item.producer}
              </Text>
            </View>
            <View style={styles.movie_field_separator}>
              <Text style={styles.movie_info_text}>Opening Crawl</Text>
            </View>
            <View style={styles.movie_opening_crawl}>
              <Text style={styles.movie_info_text}>{item.opening_crawl}</Text>
            </View>
            <View style={styles.movie_field_separator}>
              <Text style={styles.movie_info_text}>Characters</Text>
            </View>
          </>
        }
        data={characterArray}
        renderItem={renderItem}
        keyExtractor={(character) => character.name}
      />
    </View>
  );
};
