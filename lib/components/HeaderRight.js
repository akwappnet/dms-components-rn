"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
var logo = require("../Images/navlogosimple.png");
const HeaderRight = () => {
    return (<react_native_1.Image source={logo} style={{
            height: "50%",
            width: "50%",
            flex: 1,
            resizeMode: "contain",
        }}></react_native_1.Image>);
};
exports.default = HeaderRight;
