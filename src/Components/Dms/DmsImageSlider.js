import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import {
  PinchGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
  runOnJS,
} from "react-native-reanimated";

const PinchZoom = ({ uri }) => {
  const scale = useSharedValue(1);
  const [scaleval, setScaleval] = useState(1);
  const pinchHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      scale.value = event.scale;
      runOnJS(setScaleval)(scale.value);
    },
    onEnd: () => {
      scale.value = withSpring(1);
    },
  });
  useEffect(() => {}, [scaleval]);

  return (
    <View style={styles2.container}>
      <PinchGestureHandler onGestureEvent={pinchHandler}>
        <Animated.View style={{ flex: 1, transform: [{ scale: scaleval }] }}>
          <Pressable
            onPress={() => {
              setScaleval(1);
            }}
          >
            <Image
              source={{ uri }}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
          </Pressable>
        </Animated.View>
      </PinchGestureHandler>
    </View>
  );
};
export function DmsImageSlider({ images }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const openImage = (index) => {
    scrollViewRef.current.scrollTo({
      x: index * containerWidth,
      animated: true,
    });
  };

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / containerWidth);
    setSelectedIndex(index);
  };

  const onLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={{ flex: 0.8 }}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          onScroll={handleScroll}
          scrollEventThrottle={8}
        >
          {images.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => setModalVisible(true)}>
              <View style={{ width: containerWidth, flex: 1 }}>
                <Image
                  source={{ uri: image.Image }}
                  resizeMode="cover"
                  style={styles.topImage}
                />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View
            style={{
              flex: 0.5,
            }}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                flex: 1,

                justifyContent: "center",
                alignItems: "flex-end",
                paddingHorizontal: 25,
              }}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 5 }}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <PinchZoom uri={images[selectedIndex]?.Image}></PinchZoom>
            </GestureHandlerRootView>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={styles.imageTitle}>{images[selectedIndex]?.Name}</Text>
          </View>
        </View>
      </Modal>

      <View style={{ flex: 0.2, alignItems: "center", paddingTop: 5 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.bottomImagesContainer}
        >
          {images.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => openImage(index)}>
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
      <View style={{ flex: 0.2, alignItems: "center" }}>
        <Text style={styles.selectedImageName}>
          {images[selectedIndex]?.Name}
        </Text>
      </View>
    </View>
  );
}
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topImage: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  bottomImagesContainer: {
    flex: 1,
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

  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  closeText: {
    color: "white",
    fontSize: 16,
  },
  modalImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  imageTitle: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
  },
  imageFilePath: {
    color: "white",
    fontSize: 14,
    marginTop: 5,
  },
});
