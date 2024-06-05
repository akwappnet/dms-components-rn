import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { NavigatorService } from "../../services/Navigator";
import { Dms } from "../../utils/Dms";

interface DmsWebViewProps {
  Routine: string;
  Data: any;
  HandleEvent: (data: string) => void;
}
const DmsWebView: React.FC<DmsWebViewProps> = ({
  Routine,
  Data,
  HandleEvent,
}) => {
  const [url, setUrl] = useState<string | null>(null);
  console.log(url);
  useEffect(() => {
    load();
  }, []);

  const load = async (): Promise<void> => {
    const resp = await NavigatorService.callProg(
      "GET.REACT.SETTINGS.MOBILE",
      Data
    );

    setUrl(await createUrl(resp.url, resp.serverID));
  };

  const handleMessage = (event: WebViewMessageEvent): void => {
    try {
      HandleEvent(event.nativeEvent.data);
    } catch (error) {}
  };

  const createUrl = async (
    baseUrl: string,
    serverID: string
  ): Promise<string> => {
    return (
      baseUrl +
      "?token=" +
      (await Dms.Token()) +
      "&routine=" +
      Routine +
      "&serverID=" +
      serverID +
      "&port=" +
      "1"
    );
  };

  return (
    <SafeAreaView style={styles.flexContainer}>
      {url ? (
        <WebView
          source={{ uri: url }}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          onMessage={handleMessage}
        />
      ) : (
        <Text>Fail</Text>
      )}
    </SafeAreaView>
  );
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
