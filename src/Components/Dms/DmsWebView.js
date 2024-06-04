import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { WebView } from "react-native-webview";
import { NavigatorService } from "../../API/Navigator";
import { Dms } from "../../Utils/Dms";
export const DmsWebView = ({ Routine, Data, HandleEvent }) => {
  const [url, seturl] = useState(null);
  console.log(url);
  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const resp = await NavigatorService.callProg(
      "GET.REACT.SETTINGS.MOBILE",
      Data
    );

    seturl(await createUrl(resp.url, resp.serverID));
  };

  const handleMessage = (event) => {
    try {
      HandleEvent(event.nativeEvent.data);
    } catch (error) {}
  };

  const createUrl = async (baseUrl, serverID) => {
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

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
