import { View } from "react-native";
import DmsWebView from "./DmsWebView";
export function DmsReport({ ReportName, Data }) {
  const arr = [ReportName].concat(Data);
  return (
    <View style={{ flex: 1 }}>
      <DmsWebView Routine={"REPORT.REACT"} Data={arr}></DmsWebView>
    </View>
  );
}
