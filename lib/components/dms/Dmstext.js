"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const DmsTheme_1 = __importDefault(require("../../utils/DmsTheme"));
const windowWidth = react_native_1.Dimensions.get("window").width;
const Dmstext = (props) => {
    if (props.keyboardType == null) {
        props.keyboardType = "default";
    }
    if (props.secureTextEntry == null) {
        props.secureTextEntry = false;
    }
    return (<react_native_1.SafeAreaView style={{
            flex: 1,
            justifyContent: "center",
            paddingLeft: 10,
            alignItems: "stretch",
            backgroundColor: DmsTheme_1.default.DmsTextBackgroundColour,
            borderColor: "edf0f7",
            borderRadius: 7,
        }}>
      <react_native_1.TextInput placeholder={props.placeholder} placeholderTextColor={DmsTheme_1.default.DmsTextPlaceHolderTextColour} onChangeText={props.onChangeText} value={props.value} keyboardType={props.keyboardType} style={{
            color: DmsTheme_1.default.DmsTextColour,
            fontSize: 0.035 * windowWidth,
            flex: 1,
        }} maxLength={100} secureTextEntry={props.secureTextEntry} onEndEditing={props.onEndEditing}></react_native_1.TextInput>
    </react_native_1.SafeAreaView>);
};
exports.default = Dmstext;
