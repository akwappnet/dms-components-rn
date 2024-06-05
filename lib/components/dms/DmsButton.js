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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const Images = __importStar(require("../../images/Index"));
const Dmslabel_1 = __importDefault(require("./Dmslabel"));
const DmsTheme_1 = __importDefault(require("../../utils/DmsTheme"));
const DmsButton = ({ props }) => {
    const getImage = () => {
        if (props.image === "techIcon") {
            return Images.techIcon;
        }
        if (props.image === "clockIcon") {
            return Images.clockIcon;
        }
        if (props.image === "clockOffIcon") {
            return Images.clockOffIcon;
        }
        if (props.image === "downArrow") {
            return Images.downArrow;
        }
        if (props.image === "plusSymbol") {
            return Images.plusSymbol;
        }
        if (props.image === "sendSymbol") {
            return Images.sendSymbol;
        }
        return null;
    };
    return (<react_native_1.Pressable style={{
            borderRadius: 15,
            backgroundColor: props.backgroundColor
                ? props.backgroundColor
                : DmsTheme_1.default.DmsButtonColour,
            flex: 1,
        }} onPress={props.onPress}>
      {props.image && props.name === "" && (<react_native_1.View style={{ flex: 1 }}>
          <react_native_1.Image source={getImage()} style={{ height: "100%", width: "100%" }} resizeMode="contain"/>
        </react_native_1.View>)}

      {props.name && !props.image && (<react_native_1.View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Dmslabel_1.default Textstr={props.name} fontSize={20} fontWeight="bold" color="white"/>
        </react_native_1.View>)}

      {props.image && props.name && (<react_native_1.View style={{ flex: 1, flexDirection: "row" }}>
          <react_native_1.View style={{
                flex: 0.2,
                padding: 5,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <react_native_1.Image source={getImage()} style={{ height: "100%", width: "100%" }} resizeMode="contain"/>
          </react_native_1.View>
          <react_native_1.View style={{
                flex: 1,
                justifyContent: "center",
                paddingLeft: 10,
            }}>
            <Dmslabel_1.default Textstr={props.name} fontSize={20} fontWeight="bold" color="white"/>
          </react_native_1.View>
        </react_native_1.View>)}
    </react_native_1.Pressable>);
};
exports.default = DmsButton;
