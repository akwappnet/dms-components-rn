"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const Report = ({ reportData, reportFunction, reportKey, }) => {
    var _a;
    const createTable = (item) => {
        const row = [];
        for (const x in item) {
            row.push(<react_native_1.View key={x} style={{ flex: 1 }}>
          <react_native_1.Text>{item[x]}</react_native_1.Text>
        </react_native_1.View>);
        }
        return row;
    };
    return (<react_native_1.View style={{ flex: 1 }}>
      <react_native_1.View style={{ flex: 1, borderWidth: 1 }}>
        <react_native_1.View style={{ flex: 1, flexDirection: "row" }}>
          {(_a = Object.keys(reportData[0])) === null || _a === void 0 ? void 0 : _a.map((item) => (<react_native_1.Text key={item}>{item}</react_native_1.Text>))}
        </react_native_1.View>
      </react_native_1.View>

      <react_native_1.SafeAreaView style={{ flex: 1 }}>
        <react_native_1.ScrollView contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
        }}>
          {reportData === null || reportData === void 0 ? void 0 : reportData.map((item, index) => (<react_native_1.TouchableWithoutFeedback key={item[reportKey]} onPress={() => reportFunction(item)}>
              <react_native_1.View key={index} style={{ flex: 1, flexDirection: "row" }}>
                {createTable(item)}
              </react_native_1.View>
            </react_native_1.TouchableWithoutFeedback>))}
        </react_native_1.ScrollView>
      </react_native_1.SafeAreaView>
    </react_native_1.View>);
};
exports.default = Report;
