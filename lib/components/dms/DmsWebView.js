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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_webview_1 = require("react-native-webview");
const Navigator_1 = require("../../services/Navigator");
const Dms_1 = require("../../utils/Dms");
const DmsWebView = ({ Routine, Data, HandleEvent, }) => {
    const [url, setUrl] = (0, react_1.useState)(null);
    console.log(url);
    (0, react_1.useEffect)(() => {
        load();
    }, []);
    const load = () => __awaiter(void 0, void 0, void 0, function* () {
        const resp = yield Navigator_1.NavigatorService.callProg("GET.REACT.SETTINGS.MOBILE", Data);
        setUrl(yield createUrl(resp.url, resp.serverID));
    });
    const handleMessage = (event) => {
        try {
            HandleEvent(event.nativeEvent.data);
        }
        catch (error) { }
    };
    const createUrl = (baseUrl, serverID) => __awaiter(void 0, void 0, void 0, function* () {
        return (baseUrl +
            "?token=" +
            (yield Dms_1.Dms.Token()) +
            "&routine=" +
            Routine +
            "&serverID=" +
            serverID +
            "&port=" +
            "1");
    });
    return (<react_native_1.SafeAreaView style={styles.flexContainer}>
      {url ? (<react_native_webview_1.WebView source={{ uri: url }} style={styles.webview} javaScriptEnabled={true} domStorageEnabled={true} onMessage={handleMessage}/>) : (<react_native_1.Text>Fail</react_native_1.Text>)}
    </react_native_1.SafeAreaView>);
};
exports.default = DmsWebView;
const styles = react_native_1.StyleSheet.create({
    flexContainer: {
        flex: 1,
    },
    webview: {
        flex: 1,
    },
});
