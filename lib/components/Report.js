import { Text, View, SafeAreaView, ScrollView, TouchableWithoutFeedback, } from "react-native";
const Report = ({ reportData, reportFunction, reportKey, }) => {
    var _a;
    const createTable = (item) => {
        const row = [];
        for (const x in item) {
            row.push(<View key={x} style={{ flex: 1 }}>
          <Text>{item[x]}</Text>
        </View>);
        }
        return row;
    };
    return (<View style={{ flex: 1 }}>
      <View style={{ flex: 1, borderWidth: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {(_a = Object.keys(reportData[0])) === null || _a === void 0 ? void 0 : _a.map((item) => (<Text key={item}>{item}</Text>))}
        </View>
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
        }}>
          {reportData === null || reportData === void 0 ? void 0 : reportData.map((item, index) => (<TouchableWithoutFeedback key={item[reportKey]} onPress={() => reportFunction(item)}>
              <View key={index} style={{ flex: 1, flexDirection: "row" }}>
                {createTable(item)}
              </View>
            </TouchableWithoutFeedback>))}
        </ScrollView>
      </SafeAreaView>
    </View>);
};
export default Report;
//# sourceMappingURL=Report.js.map