import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

export function Report({ reportData, reportFunction, reportKey }) {
  createTable = (i) => {
    let row = [];

    for (const x in i) {
      row.push(
        <View key={x} style={{ flex: 1 }}>
          <Text>{i[x]}</Text>
        </View>
      );
    }
    return row;
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, borderWidth: 1 }}>
        <View stlye={{ flex: 1, flexDirection: "row" }}>
          {Object.keys(reportData[0])?.map((i) => (
            <Text>{i}</Text>
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
          {reportData?.map((i) => (
            <TouchableWithoutFeedback
              key={i[reportKey]}
              onPress={() => reportFunction(i)}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                {this.createTable(i)}
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
