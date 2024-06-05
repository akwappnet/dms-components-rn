import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

interface ReportProps {
  reportData: any[];
  reportFunction: (item: any) => void;
  reportKey: string;
}

const Report: React.FC<ReportProps> = ({
  reportData,
  reportFunction,
  reportKey,
}: ReportProps) => {
  const createTable = (item: any): React.ReactNode[] => {
    const row: React.ReactNode[] = [];

    for (const x in item) {
      row.push(
        <View key={x} style={{ flex: 1 }}>
          <Text>{item[x]}</Text>
        </View>
      );
    }
    return row;
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, borderWidth: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {Object.keys(reportData[0])?.map((item) => (
            <Text key={item}>{item}</Text>
          ))}
        </View>
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
          }}
        >
          {reportData?.map((item, index) => (
            <TouchableWithoutFeedback
              key={item[reportKey]}
              onPress={() => reportFunction(item)}
            >
              <View key={index} style={{ flex: 1, flexDirection: "row" }}>
                {createTable(item)}
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Report;
