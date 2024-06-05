"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmsImageSlider = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const PinchZoom = ({ uri }) => {
    const scale = (0, react_native_reanimated_1.useSharedValue)(1);
    const [scaleval, setScaleval] = (0, react_1.useState)(1);
    const pinchHandler = (0, react_native_reanimated_1.useAnimatedGestureHandler)({
        onActive: (event) => {
            scale.value = event.scale;
            (0, react_native_reanimated_1.runOnJS)(setScaleval)(scale.value);
        },
        onEnd: () => {
            scale.value = (0, react_native_reanimated_1.withSpring)(1);
        },
    });
    (0, react_1.useEffect)(() => { }, [scaleval]);
    return (<react_native_1.View style={styles2.container}>
      <react_native_gesture_handler_1.PinchGestureHandler onGestureEvent={pinchHandler}>
        <react_native_reanimated_1.default.View style={{ flex: 1, transform: [{ scale: scaleval }] }}>
          <react_native_1.Pressable onPress={() => {
            setScaleval(1);
        }}>
            <react_native_1.Image source={{ uri }} style={{ width: "100%", height: "100%", resizeMode: "contain" }}/>
          </react_native_1.Pressable>
        </react_native_reanimated_1.default.View>
      </react_native_gesture_handler_1.PinchGestureHandler>
    </react_native_1.View>);
};
const DmsImageSlider = ({ images }) => {
    var _a, _b, _c;
    const [modalVisible, setModalVisible] = (0, react_1.useState)(false);
    const [selectedIndex, setSelectedIndex] = (0, react_1.useState)(0);
    const scrollViewRef = (0, react_1.useRef)(null);
    const [containerWidth, setContainerWidth] = (0, react_1.useState)(0);
    const openImage = (index) => {
        var _a;
        (_a = scrollViewRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
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
    return (<react_native_1.View style={styles.container} onLayout={onLayout}>
      <react_native_1.View style={{ flex: 0.8 }}>
        <react_native_1.ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} ref={scrollViewRef} onScroll={handleScroll} scrollEventThrottle={8}>
          {images.map((image, index) => (<react_native_1.TouchableOpacity key={index} onPress={() => setModalVisible(true)}>
              <react_native_1.View style={{ width: containerWidth, flex: 1 }}>
                <react_native_1.Image source={{ uri: image.Image }} resizeMode="cover" style={styles.topImage}/>
              </react_native_1.View>
            </react_native_1.TouchableOpacity>))}
        </react_native_1.ScrollView>
      </react_native_1.View>
      <react_native_1.Modal transparent={true} visible={modalVisible}>
        <react_native_1.View style={styles.modalContainer}>
          <react_native_1.View style={{
            flex: 0.5,
        }}>
            <react_native_1.TouchableOpacity onPress={() => setModalVisible(false)} style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
            paddingHorizontal: 25,
        }}>
              <react_native_1.Text style={styles.closeText}>Close</react_native_1.Text>
            </react_native_1.TouchableOpacity>
          </react_native_1.View>
          <react_native_1.View style={{ flex: 5 }}>
            <react_native_gesture_handler_1.GestureHandlerRootView style={{ flex: 1 }}>
              <PinchZoom uri={(_a = images[selectedIndex]) === null || _a === void 0 ? void 0 : _a.Image}></PinchZoom>
            </react_native_gesture_handler_1.GestureHandlerRootView>
          </react_native_1.View>
          <react_native_1.View style={{ flex: 1, alignItems: "center" }}>
            <react_native_1.Text style={styles.imageTitle}>{(_b = images[selectedIndex]) === null || _b === void 0 ? void 0 : _b.Name}</react_native_1.Text>
          </react_native_1.View>
        </react_native_1.View>
      </react_native_1.Modal>

      <react_native_1.View style={{ flex: 0.2, alignItems: "center", paddingTop: 5 }}>
        <react_native_1.ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bottomImagesContainer}>
          {images.map((image, index) => (<react_native_1.TouchableOpacity key={index} onPress={() => openImage(index)}>
              <react_native_1.Image source={{ uri: image.Image }} style={index == selectedIndex
                ? styles.bottomImagesel
                : styles.bottomImage}/>
            </react_native_1.TouchableOpacity>))}
        </react_native_1.ScrollView>
      </react_native_1.View>
      <react_native_1.View style={{ flex: 0.2, alignItems: "center" }}>
        <react_native_1.Text style={styles.imageTitle}>{(_c = images[selectedIndex]) === null || _c === void 0 ? void 0 : _c.Name}</react_native_1.Text>
      </react_native_1.View>
    </react_native_1.View>);
};
exports.DmsImageSlider = DmsImageSlider;
exports.default = exports.DmsImageSlider;
const styles2 = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "contain",
    },
});
const styles = react_native_1.StyleSheet.create({
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
