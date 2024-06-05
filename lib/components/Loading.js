"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loading = void 0;
const react_native_1 = require("react-native");
function Loading() {
    return (<react_native_1.View style={{ flex: 1 }}>
      <react_native_1.View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <react_native_1.ActivityIndicator size="large" color="#001489"/>
      </react_native_1.View>
      ;
    </react_native_1.View>);
}
exports.Loading = Loading;
