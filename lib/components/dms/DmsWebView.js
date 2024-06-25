var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { WebView } from "react-native-webview";
import { NavigatorService } from "../../services/Navigator";
import { Dms } from "../../utils/Dms";
const DmsWebView = ({ Routine, Data, HandleEvent, }) => {
    const [url, setUrl] = useState(null);
    console.log(url);
    useEffect(() => {
        load();
    }, []);
    const load = () => __awaiter(void 0, void 0, void 0, function* () {
        const resp = yield NavigatorService.callProg("GET.REACT.SETTINGS.MOBILE", Data);
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
            (yield Dms.Token()) +
            "&routine=" +
            Routine +
            "&serverID=" +
            serverID +
            "&port=" +
            "1");
    });
    return (<SafeAreaView style={styles.flexContainer}>
      {url ? (<WebView source={{ uri: url }} style={styles.webview} javaScriptEnabled={true} domStorageEnabled={true} onMessage={handleMessage}/>) : (<Text>Fail</Text>)}
    </SafeAreaView>);
};
export default DmsWebView;
const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
    },
    webview: {
        flex: 1,
    },
});
//# sourceMappingURL=DmsWebView.js.map