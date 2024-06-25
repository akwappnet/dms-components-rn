var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useCallback } from "react";
import { View, SafeAreaView, ScrollView, TouchableWithoutFeedback, RefreshControl, StyleSheet, } from "react-native";
import Dmslabel from "./dms/Dmslabel";
const JobList = ({ reportData, reportFunction, reportKey, load, }) => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const handleRefresh = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        setIsRefreshing(true); // Start the refreshing indicator
        yield load(); // Call your load function
        setIsRefreshing(false); // Stop the refreshing indicator
    }), [load]);
    return (<SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh}/>}>
        {reportData === null || reportData === void 0 ? void 0 : reportData.map((i) => (<View style={styles.reportItemContainer} key={i[reportKey]}>
            <TouchableWithoutFeedback onPress={() => reportFunction(i)}>
              <View style={styles.reportItemContent}>
                <View style={{ flex: 1 }}>
                  <Dmslabel Textstr={`Job No: ${i["Job No"]}`}/>
                </View>
                <View style={{ flex: 1 }}>
                  <Dmslabel Textstr={`Reg No: ${i["Reg"]}`}/>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>))}
      </ScrollView>
    </SafeAreaView>);
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
//# sourceMappingURL=JobList.js.map