import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

export default function DetalhesScreen({ route, navigation }) {
  const { movie } = route.params;
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <ScrollView style={styles.container}>
      {imageUrl && (
        <Image source={{ uri: imageUrl }} style={styles.poster} resizeMode="cover" />
      )}

      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.rating}>⭐ {movie.vote_average?.toFixed(1) || "N/A"}</Text>

      <Text style={styles.overviewTitle}>Sinopse</Text>
      <Text style={styles.overview}>{movie.overview || "Sem sinopse disponível."}</Text>

      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      {/* Créditos TMDB */}
      <View style={styles.tmdbContainer}>
        <Image
          source={{ uri: "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-8f1b9a84f04f4b88b1d6f52af9a6e69d73cd541b0d6c1c7a6ac9c7a9c04a5a35.svg" }}
          style={styles.tmdbLogo}
          resizeMode="contain"
        />
        <Text style={styles.tmdbText}>Powered by TMDB</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d253f",
    padding: 20,
  },
  poster: {
    width: "100%",
    height: 500,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    color: "#90cea1",
    textAlign: "center",
    marginBottom: 20,
  },
  overviewTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  overview: {
    fontSize: 16,
    color: "#dcdcdc",
    lineHeight: 22,
    marginBottom: 30,
  },
  backButton: {
    backgroundColor: "#01b4e4",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  tmdbContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  tmdbLogo: {
    width: 160,
    height: 40,
    marginBottom: 8,
  },
  tmdbText: {
    color: "#90cea1",
    fontSize: 14,
    fontStyle: "italic",
  },
});
