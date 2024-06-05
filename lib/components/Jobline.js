"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobLine = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
function JobLine({ user }) {
    return (<react_native_1.View style={{ flex: 1 }}>
      {user && (<react_native_1.View style={{ flex: 1, justifyContent: "center" }}>
          <react_native_1.Text>Staff: {user.ID}</react_native_1.Text>
          <react_native_1.Text>{user.name}</react_native_1.Text>
        </react_native_1.View>)}
    </react_native_1.View>);
}
exports.JobLine = JobLine;
