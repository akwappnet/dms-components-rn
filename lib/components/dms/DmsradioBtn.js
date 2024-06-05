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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const Navigator_1 = require("../../services/Navigator");
const DmsradioBtn = ({ onPress, file, recordID }) => {
    const [jobStatusList, setJobStatusList] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        populate();
    }, []);
    const populate = () => __awaiter(void 0, void 0, void 0, function* () {
        const list = yield Navigator_1.NavigatorService.popualteRadio(file, recordID);
        setJobStatusList(list);
    });
    return (<react_native_1.View style={{ flex: 1 }}>
      {jobStatusList.map((item) => (<react_native_1.View style={styles.radioButtonContainer}>
          <react_native_1.TouchableOpacity onPress={onPress} style={styles.radioButton}>
            {item.selected ? <react_native_1.View style={styles.radioButtonIcon}/> : null}
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity onPress={onPress}>
            <react_native_1.Text style={styles.radioButtonText}>{item.children}</react_native_1.Text>
          </react_native_1.TouchableOpacity>
        </react_native_1.View>))}
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 45,
    },
    radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center",
    },
    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6",
    },
    radioButtonText: {
        fontSize: 16,
        marginLeft: 16,
    },
});
exports.default = DmsradioBtn;
