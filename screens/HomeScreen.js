import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
  ScrollView,
  Animated,
} from "react-native";
import MovieCard from "../components/MovieCard";

const API_KEY = "e5b35cd790583ec7ffbbf90ec40a9c60";

export default function HomeScreen({ navigation }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  // Animações
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animação de fade-in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    // Animação de “pulse” (brilho leve)
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.08,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const buscarFilmes = async () => {
    if (!query.trim()) {
      setErro("Digite o nome de um filme!");
      return;
    }

    setLoading(true);
    setErro("");
    setMovies([]);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(
          query
        )}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setMovies(data.results);
      } else {
        setErro("Nenhum filme encontrado.");
      }
    } catch (error) {
      setErro("Erro ao buscar os filmes.");
    } finally {
      setLoading(false);
    }
  };

  const limparBusca = () => {
    setQuery("");
    setMovies([]);
    setErro("");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🎬 Busque seu Filme</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do filme"
        placeholderTextColor="#aaa"
        value={query}
        onChangeText={setQuery}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={buscarFilmes}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.clearButton]}
          onPress={limparBusca}
        >
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <ActivityIndicator size="large" color="#01b4e4" style={{ marginVertical: 20 }} />
      )}
      {erro ? <Text style={styles.error}>{erro}</Text> : null}

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => navigation.navigate("Detalhes", { movie: item })}
          />
        )}
        scrollEnabled={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Rodapé animado TMDB */}
      <Animated.View
        style={[
          styles.tmdbContainer,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        <Image
          source={{
            uri: "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-8f1b9a84f04f4b88b1d6f52af9a6e69d73cd541b0d6c1c7a6ac9c7a9c04a5a35.svg",
          }}
          style={styles.tmdbLogo}
          resizeMode="contain"
        />
        <Text style={styles.tmdbText}>Powered by TMDB</Text>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d253f",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "#01b4e4",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  clearButton: {
    backgroundColor: "#ff4c4c",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  error: {
    color: "#ff4c4c",
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },
  tmdbContainer: {
    alignItems: "center",
    marginTop: 30,
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
