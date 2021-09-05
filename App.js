import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MovieDetails } from "./Screens/MovieDetails/MovieDetails";
import { MovieResults } from "./Screens/MovieResults/MovieResults";

const MovieResultsStack = createStackNavigator();

const titleOptions = {
  headerStyle: {
    backgroundColor: "rgb(216,216,216)",
  },
  headerTitleAlign: "center",
  headerTintColor: "rgb(120,142,164)",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default () => {
  return (
    <NavigationContainer>
      <MovieResultsStack.Navigator>
        <MovieResultsStack.Screen
          name="Star Wars Movies"
          component={MovieResults}
          options={titleOptions}
        />
        <MovieResultsStack.Screen
          name="Movie Title"
          component={MovieDetails}
          options={titleOptions}
        />
      </MovieResultsStack.Navigator>
    </NavigationContainer>
  );
};
