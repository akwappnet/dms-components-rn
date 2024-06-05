import React, { useState, useCallback } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  RefreshControl,
  StyleSheet,
} from "react-native";
import Dmslabel from "./dms/Dmslabel";

// Define the type for a single report item
interface ReportItem {
  [key: string]: string;
  "Job No": string;
  Reg: string;
}

// Define the type for the props
interface JobListProps {
  reportData: ReportItem[];
  reportFunction: (item: ReportItem) => void;
  reportKey: string;
  load: () => Promise<void>;
}

const JobList: React.FC<JobListProps> = ({
  reportData,
  reportFunction,
  reportKey,
  load,
}: JobListProps) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true); // Start the refreshing indicator
    await load(); // Call your load function
    setIsRefreshing(false); // Stop the refreshing indicator
  }, [load]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      >
        {reportData?.map((i) => (
          <View style={styles.reportItemContainer} key={i[reportKey]}>
            <TouchableWithoutFeedback onPress={() => reportFunction(i)}>
              <View style={styles.reportItemContent}>
                <View style={{ flex: 1 }}>
                  <Dmslabel Textstr={`Job No: ${i["Job No"]}`} />
                </View>
                <View style={{ flex: 1 }}>
                  <Dmslabel Textstr={`Reg No: ${i["Reg"]}`} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default JobList;
const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 10,
    justifyContent: "space-between",
  },
  reportItemContainer: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  reportItemContent: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
});
