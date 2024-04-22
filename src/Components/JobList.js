import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  RefreshControl,
} from "react-native";
import { useState, useCallback } from "react";
import { Dmslabel } from "./Dms/Dmslabel";

export function JobList({ reportData, reportFunction, reportKey, load }) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true); // Start the refreshing indicator
    await load(); // Call your load function
    setIsRefreshing(false); // Stop the refreshing indicator
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          padding: 10,
          justifyContent: "space-between",
        }}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      >
        {reportData?.map((i) => (
          <View
            style={{
              flex: 1,
              padding: 10,
              borderWidth: 1,
              margin: 10,
              borderRadius: 10,
              backgroundColor: "white",
            }}
            key={i[reportKey]}
          >
            <TouchableWithoutFeedback onPress={() => reportFunction(i)}>
              <View style={{ flex: 1, flexDirection: "row", padding: 10 }}>
                <View style={{ flex: 1 }}>
                  <Dmslabel {...{ Textstr: "Job No: " + i["Job No"] }} />
                </View>
                <View style={{ flex: 1 }}>
                  <Dmslabel {...{ Textstr: "Reg No: " + i["Reg"] }} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
