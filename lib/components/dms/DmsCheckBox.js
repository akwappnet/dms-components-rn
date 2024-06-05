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
const DmsCheckBox = ({ label, initialCheck = false, onCheckChange, }) => {
    const [checked, setChecked] = (0, react_1.useState)(initialCheck);
    const handlePress = () => {
        const newCheckState = !checked;
        setChecked(newCheckState);
        if (onCheckChange) {
            onCheckChange(newCheckState);
        }
    };
    return (<react_native_1.TouchableOpacity style={styles.container} onPress={handlePress}>
      <react_native_1.View style={[styles.checkbox, checked && styles.checkedCheckbox]}>
        {checked && <react_native_1.View style={styles.innerCheckmark}/>}
      </react_native_1.View>
      {label ? <react_native_1.Text style={styles.label}>{label}</react_native_1.Text> : null}
    </react_native_1.TouchableOpacity>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: "#666",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5,
    },
    checkedCheckbox: {
        backgroundColor: "#666", // color when checkbox is checked
    },
    innerCheckmark: {
        width: 9,
        height: 9,
        backgroundColor: "white",
    },
    label: {
        marginLeft: 5,
    },
});
exports.default = DmsCheckBox;
