"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Radiobtn = ({ onPress, selected, children, }) => {
    return (<react_native_1.View style={styles.radioButtonContainer}>
      <react_native_1.TouchableOpacity onPress={onPress} style={styles.radioButton}>
        {selected ? <react_native_1.View style={styles.radioButtonIcon}/> : null}
      </react_native_1.TouchableOpacity>
      <react_native_1.TouchableOpacity onPress={onPress}>
        <react_native_1.Text style={styles.radioButtonText}>{children}</react_native_1.Text>
      </react_native_1.TouchableOpacity>
    </react_native_1.View>);
};
exports.default = Radiobtn;
const styles = react_native_1.StyleSheet.create({
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 45,
    },
    radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center",
    },
    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6",
    },
    radioButtonText: {
        fontSize: 16,
        marginLeft: 16,
    },
});
