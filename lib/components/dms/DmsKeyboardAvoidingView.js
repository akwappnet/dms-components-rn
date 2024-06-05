"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const DmsKeyboardAvoidingView = ({ children, }) => {
    if (react_native_1.Platform.OS === "ios") {
        return (<react_native_1.KeyboardAvoidingView behavior={react_native_1.Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        {children}
      </react_native_1.KeyboardAvoidingView>);
    }
    else {
        return <react_native_1.View style={{ flex: 1 }}>{children}</react_native_1.View>;
    }
};
exports.default = DmsKeyboardAvoidingView;
