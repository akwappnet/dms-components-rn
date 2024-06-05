"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const DmsTheme_1 = __importDefault(require("../../utils/DmsTheme"));
const windowWidth = react_native_1.Dimensions.get("window").width;
const Dmslabel = ({ Textstr, fontWeight, fontSize, color, marginBottom, }) => {
    let fontmulti = 0.035;
    if (fontSize) {
        fontmulti = 0.033 + fontSize / 1000;
    }
    return (<react_native_1.Text style={{
            fontWeight: fontWeight ? fontWeight : "normal",
            fontSize: fontmulti * windowWidth,
            color: color ? color : DmsTheme_1.default.DmsLabelColour,
            marginBottom: marginBottom ? marginBottom : 0,
        }}>
      {Textstr}
    </react_native_1.Text>);
};
exports.default = Dmslabel;
