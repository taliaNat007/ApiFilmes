import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function MovieCard({ movie, onPress }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/150x220?text=Sem+Imagem";

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.poster} />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.date}>{movie.release_date}</Text>
        <Text style={styles.overview} numberOfLines={3}>
          {movie.overview || "Sem descrição disponível."}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#1b3a61",
    borderRadius: 10,
    marginVertical: 8,
    overflow: "hidden",
    elevation: 3,
  },
  poster: {
    width: 100,
    height: 150,
  },
  info: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  date: {
    color: "#ccc",
    fontSize: 13,
    marginBottom: 5,
  },
  overview: {
    color: "#ddd",
    fontSize: 14,
  },
});
