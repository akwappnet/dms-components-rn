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
const react_native_dropdown_picker_1 = __importDefault(require("react-native-dropdown-picker"));
const Navigator_1 = require("../../services/Navigator");
react_native_dropdown_picker_1.default.setListMode("MODAL");
const windowWidth = react_native_1.Dimensions.get("window").width;
const DmsLookup = ({ file, recordID, getValue, currentValue, }) => {
    const [open, setOpen] = (0, react_1.useState)(false);
    const [value, setValue] = (0, react_1.useState)(0);
    const [items, setItems] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        populate();
    }, []);
    const populate = () => __awaiter(void 0, void 0, void 0, function* () {
        setItems(yield Navigator_1.NavigatorService.popualteDropDown(file, recordID));
        setValue(currentValue - 1);
    });
    return (<react_native_1.View style={{ flex: 1 }}>
      <react_native_dropdown_picker_1.default open={open} value={value} items={items} setOpen={setOpen} setValue={setValue} setItems={setItems} dropDownDirection="TOP" onChangeValue={() => {
            getValue(items[value]);
        }} textStyle={{ fontSize: 0.04 * windowWidth }}/>
    </react_native_1.View>);
};
exports.default = DmsLookup;
