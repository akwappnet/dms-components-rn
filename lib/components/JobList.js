"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const Dmslabel_1 = __importDefault(require("./dms/Dmslabel"));
const JobList = ({ reportData, reportFunction, reportKey, load, }) => {
    const [isRefreshing, setIsRefreshing] = (0, react_1.useState)(false);
    const handleRefresh = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        setIsRefreshing(true); // Start the refreshing indicator
        yield load(); // Call your load function
        setIsRefreshing(false); // Stop the refreshing indicator
    }), [load]);
    return (<react_native_1.SafeAreaView style={{ flex: 1 }}>
      <react_native_1.ScrollView contentContainerStyle={styles.scrollViewContent} refreshControl={<react_native_1.RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh}/>}>
        {reportData === null || reportData === void 0 ? void 0 : reportData.map((i) => (<react_native_1.View style={styles.reportItemContainer} key={i[reportKey]}>
            <react_native_1.TouchableWithoutFeedback onPress={() => reportFunction(i)}>
              <react_native_1.View style={styles.reportItemContent}>
                <react_native_1.View style={{ flex: 1 }}>
                  <Dmslabel_1.default Textstr={`Job No: ${i["Job No"]}`}/>
                </react_native_1.View>
                <react_native_1.View style={{ flex: 1 }}>
                  <Dmslabel_1.default Textstr={`Reg No: ${i["Reg"]}`}/>
                </react_native_1.View>
              </react_native_1.View>
            </react_native_1.TouchableWithoutFeedback>
          </react_native_1.View>))}
      </react_native_1.ScrollView>
    </react_native_1.SafeAreaView>);
};
exports.default = JobList;
const styles = react_native_1.StyleSheet.create({
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
