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
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const DmsImageSlider2 = ({ images }) => {
    const [selectedIndex, setSelectedIndex] = (0, react_1.useState)(0);
    const renderItem = ({ item }) => (<react_native_1.View style={styles.item}>
      <react_native_1.Image source={{ uri: item.Image }} style={styles.image}/>
    </react_native_1.View>);
    return (<react_native_1.View style={{ flex: 1 }}>
      <react_native_1.View style={{ flex: 1 }}></react_native_1.View>
      <react_native_1.View style={{ flex: 1 }}>
        <react_native_1.View style={{ flex: 1, alignItems: "center", paddingTop: 5 }}>
          <react_native_1.ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
            {images.map((image, index) => (<react_native_1.TouchableOpacity key={index} onPress={() => setSelectedIndex(index)}>
                <react_native_1.Image source={{ uri: image.Image }} style={index === selectedIndex
                ? styles.bottomImagesel
                : styles.bottomImage}/>
              </react_native_1.TouchableOpacity>))}
          </react_native_1.ScrollView>
        </react_native_1.View>
      </react_native_1.View>
    </react_native_1.View>);
};
exports.default = DmsImageSlider2;
const styles = react_native_1.StyleSheet.create({
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
