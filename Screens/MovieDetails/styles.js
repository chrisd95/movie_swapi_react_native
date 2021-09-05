import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  movie_info_text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "rgb(88, 88,88)",
  },
  movie_info: {
    height: Dimensions.get("window").height * 0.12,
    backgroundColor: "white",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: "900",
    color: "rgb(88, 88, 88)",
    padding: 15,
  },
  movie_info_characters: {
    height: Dimensions.get("window").height * 0.02,
    backgroundColor: "white",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: "900",
    color: "rgb(88, 88, 88)",
    padding: 15,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgb(151, 151, 151)",
  },
  movie_opening_crawl: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: "900",
    color: "rgb(88, 88, 88)",
    padding: 15,
  },
  movie_field_separator: {
    height: Dimensions.get("window").height * 0.03,
    backgroundColor: "rgb(188, 188, 188)",
    alignItems: "flex-start",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgb(151, 151, 151)",
    padding: 15,
    fontSize: 12,
    color: "rgb(120, 142, 164)",
    fontWeight: "bold",
  },
});
