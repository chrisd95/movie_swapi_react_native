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
      let characterSWAPIFetches = [];
      try {
        Promise.all(
          item.characters.map((url) => {
            return new Promise((resolve) => {
              fetch(url).then((response) => {
                return new Promise(() => {
                  response.json().then((jsonRes) => {
                    characterSWAPIFetches.push({ name: jsonRes.name });
                    resolve();
                  });
                });
              });
            });
          })
        ).then(() => {
          setCharacterArray(characterSWAPIFetches);
        });
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
