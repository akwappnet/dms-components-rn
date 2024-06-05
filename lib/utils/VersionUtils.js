"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_device_info_1 = __importDefault(require("react-native-device-info"));
const VersionUtils = {
    getVersionNumber() {
        return react_native_device_info_1.default.getVersion();
    },
};
exports.default = VersionUtils;
