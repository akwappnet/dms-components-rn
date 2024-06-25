import React, { useState, FC } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

interface DmsImageSlider2Props {
  images: { Image: string }[];
}

const DmsImageSlider2: FC<DmsImageSlider2Props> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: "center", paddingTop: 5 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
          >
            {images.map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedIndex(index)}
              >
                <Image
                  source={{ uri: image.Image }}
                  style={
                    index === selectedIndex
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
};
export default DmsImageSlider2;
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
