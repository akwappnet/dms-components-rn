import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export function DmsImageSlider2({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.Image }} style={styles.image} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: "center", paddingTop: 5 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.bottomImagesContainer}
          >
            {images.map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedIndex(index)}
              >
                <Image
                  source={{ uri: image.Image }}
                  style={
                    index == selectedIndex
                      ? styles.bottomImagesel
                      : styles.bottomImage
                  }
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  bottomImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginHorizontal: 5,
  },
  bottomImagesel: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginHorizontal: 5,
  },
});
